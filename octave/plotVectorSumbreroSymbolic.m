## The following code will produce the same vector field plot as Figure 1.14 
## from Example 1.6 (pg. 39) from A Student's Guide to Maxwell's Equations by 
## Dr. Daniel Fleisch.

clc;
clear;

## Make sure symbolic package is loaded and symbolic variables declared.
pkg load symbolic
syms x y z
syms f(x,y,z)

## Write a Vector Field Equation in terms of symbolic variables 
vectorfield = [
  sin(pi*y/2); 
  -sin(pi*x/2); 
  z*x+y];
  
##f = 3*(1-x)^2*exp(-x^2 - (y+1)^2) ...
##  - 10*(x/5 - x^3 - y^5)*exp(-x^2-y^2) ...
##  - 1/3*exp(-(x+1)^2 - y^2);
##vectorfield = gradient(f, [x, y, z])

## Vector components are converted from symbolic into "anonymous functions" which allows them to be graphed.
## The "'vars', [x y]" syntax ensures each component is a function of both 'x' & 'y'
iComponent = function_handle (vectorfield(1), 'vars', [x y z]); 
jComponent = function_handle (vectorfield(2), 'vars', [x y z]); 
kComponent = function_handle (vectorfield(3), 'vars', [x y z]); 

## Setup a 3D grid
[X,Y,Z] = meshgrid ([-0.5:0.05:0.5]);

startx = 100;
starty = 100;
width = 1200;
height = 800;
figure(1, 'position',[startx,starty,width,height]);

%quiver (X, Y, iComponent (X, Y), jComponent (X,Y))
h = quiver3 (X, Y, Z,
  iComponent (X, Y, Z), 
  jComponent (X, Y, Z),
  kComponent (X, Y, Z));
set(h, "maxheadsize", 0.2);
set(h, "color", "red");
  
rotate3d on