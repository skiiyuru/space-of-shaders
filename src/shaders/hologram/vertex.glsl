uniform float u_time;

varying vec3 v_position;
varying vec3 v_normal;

#include ../includes/random2D.glsl

void main () {
  vec4 model_position = modelMatrix * vec4(position, 1.0);

  // Glitch
  float glitch_time = u_time - model_position.y;

  // combine multiple sin for more randomness
  float glitch_strength = sin(glitch_time) + sin(glitch_time * 3.45) + sin(glitch_time * 8.76);
  glitch_strength /= 3.0;

  // reduce the frequency of the waves
  glitch_strength = smoothstep(0.3, 1.0, glitch_strength);
  glitch_strength *= 0.05;

  model_position.x += (random2D(model_position.xz + u_time * 0.01) - 0.5) * glitch_strength;
  model_position.z += (random2D(model_position.zx + u_time * 0.01) - 0.5) * glitch_strength;

  gl_Position = projectionMatrix * viewMatrix * model_position;

  // Ensure translation is not applied by making it a 'NON homogeneous vector i.e 0.0 for the last value'
  vec4 model_normal = modelMatrix * vec4(normal, 0.0);

  // Varyings
  v_position = model_position.xyz;
  v_normal = model_normal.xyz;
}