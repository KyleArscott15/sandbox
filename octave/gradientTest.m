clc;
%clf;
%clear;

pkg load symbolic

syms f(x,y)
%f = @(x) sin(x) * x % do not define a function this way for the syms package
f = x^3 + 5*y^2;     % this is how you define a function for the syms package

gf = gradient(f)

[x, y, z] = peaks (25);

