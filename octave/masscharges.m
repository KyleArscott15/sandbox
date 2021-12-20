clc;
clf;
clear;

pkg load symbolic

##function name (arg-list)
##  body
##endfunction

function [i, j, k] = getMass(k)
  syms x y z
  syms f(x,y,z)
  magnitude = k / (x^2 + y^2 + z^2);
  
  vectorField = -magnitude*[x, y, z];
  vectorFieldGradient = gradient(magnitude);
  vectorFieldGradientDivergence = divergence(vectorFieldGradient);
  vectorFieldGradientDivergenceFunction = -vectorFieldGradientDivergence * [x, y, z];
  
  vectorFieldToPlot = vectorField;

  i = function_handle(vectorFieldToPlot(1), 'vars', [x y z]); 
  j = function_handle(vectorFieldToPlot(2), 'vars', [x y z]); 
  k = function_handle(vectorFieldToPlot(3), 'vars', [x y z]);
  
endfunction

function [x, y, z] = getVectorSpace(xTrans, yTrans, zTrans)
  [x, y, z] = meshgrid ([-5:1:5]);
  x = x + xTrans;
  y = y + yTrans;
  z = z + zTrans;
endfunction

[i,j,k] = getMass(1);
[i2,j2,k2] = getMass(1);
[i3,j3,k3] = getMass(-2);

[x,y,z] = getVectorSpace(0, 0, 0);
[x2,y2,z2]= getVectorSpace(5.5, 5.5, 1.5);
[x3,y3,z3]= getVectorSpace(-3, -2, -2);

startx = 100;
starty = 100;
width = 1200;
height = 800;
figure(1, 'position',[startx, starty, width, height]);
hold on

q = quiver3 (x, y, z,
  i(x, y, z), 
  j(x, y, z),
  k(x, y, z));
set(q, "maxheadsize", 0.2);
  
q2 = quiver3 (x2, y2, z2,
  i2(x, y, z), 
  j2(x, y, z),
  k2(x, y, z));
set(q2, "maxheadsize", 0.2);  

q3 = quiver3 (x3, y3, z3,
  i3(x, y, z), 
  j3(x, y, z),
  k3(x, y, z));
set(q3, "maxheadsize", 0.2); 

rotate3d on
hold off
