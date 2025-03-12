#include ./random.glsl

float minecraft(vec2 uv) {
  float gradient_x = floor(uv.x * 10.0) / 10.0;
  float gradient_y = floor(uv.y * 10.0) / 10.0;
  float strength = random(vec2(gradient_x, gradient_y));
  return strength;
}