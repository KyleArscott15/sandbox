import streamlit as st
import networkx as nx
import plotly.graph_objects as go
import uuid

st.set_page_config(page_title="Vireya MVP", layout="wide")
st.title("🧠 Vireya: Visual Knowledge Modeling (Plotly Edition)")

# --- State Init ---
if "nodes" not in st.session_state:
    st.session_state.nodes = {}
if "edges" not in st.session_state:
    st.session_state.edges = []

# --- Add Node ---
st.sidebar.header("➕ Add Concept")
with st.sidebar.form("add_node_form"):
    label = st.text_input("Label for new concept")
    if st.form_submit_button("Add Node") and label:
        node_id = str(uuid.uuid4())[:6]
        st.session_state.nodes[node_id] = label
        st.sidebar.success(f"✅ Added node: {label}")

# --- Add Edge ---
st.sidebar.header("🔗 Create Relationship")
if len(st.session_state.nodes) >= 2:
    with st.sidebar.form("add_edge_form"):
        node_options = list(st.session_state.nodes.items())
        src = st.selectbox("Source Node", node_options,
                           format_func=lambda x: x[1])
        tgt = st.selectbox("Target Node", node_options,
                           format_func=lambda x: x[1])
        rel = st.text_input("Relationship Label", "relates to")

        if st.form_submit_button("Add Edge") and src[0] != tgt[0]:
            st.session_state.edges.append((src[0], tgt[0], rel))
            st.sidebar.success(f"🔗 {src[1]} → {tgt[1]}")

# --- Visualize with Plotly ---
st.subheader("📊 Knowledge Graph")

if st.session_state.nodes and st.session_state.edges:
    G = nx.DiGraph()

    # Add nodes
    for node_id, label in st.session_state.nodes.items():
        G.add_node(node_id, label=label)

    # Add edges
    for src, tgt, label in st.session_state.edges:
        G.add_edge(src, tgt, label=label)

    pos = nx.spring_layout(G, seed=42)  # Layout algorithm

    # Build node traces
    node_x, node_y, node_text = [], [], []
    for node_id in G.nodes:
        x, y = pos[node_id]
        node_x.append(x)
        node_y.append(y)
        node_text.append(G.nodes[node_id]["label"])

    node_trace = go.Scatter(
        x=node_x, y=node_y,
        mode="markers+text",
        marker=dict(size=20, color="skyblue"),
        text=node_text,
        textposition="top center",
        hoverinfo="text"
    )

    # Build edge traces
    edge_x, edge_y, edge_text = [], [], []
    for src, tgt in G.edges:
        x0, y0 = pos[src]
        x1, y1 = pos[tgt]
        edge_x += [x0, x1, None]
        edge_y += [y0, y1, None]
        edge_text.append(G.edges[src, tgt]["label"])

    edge_trace = go.Scatter(
        x=edge_x, y=edge_y,
        line=dict(width=2, color="#888"),
        hoverinfo="none",
        mode="lines"
    )

    fig = go.Figure(data=[edge_trace, node_trace])
    fig.update_layout(
        showlegend=False,
        height=600,
        margin=dict(l=20, r=20, t=40, b=20),
        xaxis=dict(showgrid=False, zeroline=False),
        yaxis=dict(showgrid=False, zeroline=False)
    )

    st.plotly_chart(fig, use_container_width=True)

else:
    st.info("ℹ️ Add at least two nodes and one relationship to see the graph.")

# --- Debug View ---
with st.expander("🧠 Debug Data"):
    st.write("Nodes:", st.session_state.nodes)
    st.write("Edges:", st.session_state.edges)
