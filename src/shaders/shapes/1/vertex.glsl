varying vec2 v_uv;

void main() {
  gl_Position = projectionMatrix * modelMatrix * viewMatrix * vec4(position, 1.0);

  // Varyings
  v_uv = uv;
}