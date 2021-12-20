clc;
clear;

##function name (arg-list)
##  body
##endfunction

##function getMass(k, xTrans, yTrans, zTrans)
##  body
##endfunction

pkg load symbolic
syms x y z
syms f(x,y,z)

magnitude = 1 / (x^2 + y^2 + z^2);

vectorField = -magnitude*[x, y, z];
vectorFieldGradient = gradient(magnitude);
vectorFieldGradientDivergence = divergence(vectorFieldGradient);
vectorFieldGradientDivergenceFunction = -vectorFieldGradientDivergence * [x, y, z];
##vectorFieldTrans = vectorField * tvec;

vectorFieldToPlot = vectorField;

iComponent = function_handle (vectorFieldToPlot(1), 'vars', [x y z]); 
jComponent = function_handle (vectorFieldToPlot(2), 'vars', [x y z]); 
kComponent = function_handle (vectorFieldToPlot(3), 'vars', [x y z]); 

startx = 100;
starty = 100;
width = 1200;
height = 800;
figure(1, 'position',[startx,starty,width,height]);

[X,Y,Z] = meshgrid ([-5:0.5:5]);

xTrans = 5;
yTrans = 2;
zTrans = -1;

q = quiver3 (X + xTrans, Y + yTrans, Z + zTrans,
  iComponent(X, Y, Z), 
  jComponent(X, Y, Z),
  kComponent(X, Y, Z));
set(q, "maxheadsize", 0.2);

rotate3d on

##mags = sqrt(sum(cat(2, q.UData(:), q.VData(:), ...
##            reshape(q.WData, numel(q.UData), [])).^2, 2));
##
##currentColormap = colormap(gca)

%// Now determine the color to make each arrow using a colormap
##[~, ~, ind] = histcounts(mags, size(currentColormap, 1))