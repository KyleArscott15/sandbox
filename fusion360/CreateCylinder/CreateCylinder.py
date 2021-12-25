#Author-Kyle Arscott
#Description-

import adsk.core, adsk.fusion, adsk.cam, traceback

def run(context):
    ui = None
    try:
        app = adsk.core.Application.get()
        ui = app.userInterface

        doc = app.documents.add(adsk.core.DocumentTypes.FusionDesignDocumentType)
        design = app.activeProduct

        # Get the root component of the active design.
        rootComp = design.rootComponent

        # Create a new sketch on the xy plane.
        sketches = rootComp.sketches
        xyPlane = rootComp.xYConstructionPlane
        sketch = sketches.add(xyPlane)

        # Draw a circle.
        circles = sketch.sketchCurves.sketchCircles
        circle1 = circles.addByCenterRadius(adsk.core.Point3D.create(0, 0, 0), 2)

        # Get the profile defined by the circle.
        prof = sketch.profiles.item(0)

        # Define that the extent is a distance extent of 5 cm.
        distance = adsk.core.ValueInput.createByReal(5)

        # Create the extrusion.
        extrudes = rootComp.features.extrudeFeatures
        ext = extrudes.addSimple(prof, distance, adsk.fusion.FeatureOperations.NewComponentFeatureOperation)

        # Create a new sketch on the xy plane.
        sketches = rootComp.sketches
        xyPlane = rootComp.xYConstructionPlane
        sketch = sketches.add(xyPlane)

        # Draw a circle.
        circles = sketch.sketchCurves.sketchCircles
        circle1 = circles.addByCenterRadius(adsk.core.Point3D.create(0, 0, 0), 0.75)

        # Get the profile defined by the circle.
        prof = sketch.profiles.item(0)

        # Create the extrusion.
        extrudes = rootComp.features.extrudeFeatures
        ext = extrudes.addSimple(prof, distance, adsk.fusion.FeatureOperations.CutFeatureOperation)


    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))
