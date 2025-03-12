varying vec2 v_uv;

#define NUM_REPEATS 10.0

float bars(vec2 uv) {
  float repeat_x = mod(uv.x * NUM_REPEATS, 1.0);
  float repeat_y = mod(uv.y * NUM_REPEATS, 1.0);

  float bars_x = step(0.8, repeat_y);
  bars_x *= step(0.4, repeat_x);

  float bars_y = step(0.8, repeat_x);
  bars_y *= step(0.4, repeat_y);
  
  float strength = bars_x + bars_y;
  
  return strength;
}

void main() {
  // 1
  // float strength = mod(v_uv.y * NUM_REPEATS, 1.0);

  // 2
  // float repeat = mod(v_uv.x * NUM_REPEATS, 1.0);
  // float strength = step(0.8, repeat); // if < 0.5 = 0, else 1

  // 3
  // float repeat_x = mod(v_uv.x * NUM_REPEATS, 1.0);
  // float repeat_y = mod(v_uv.y * NUM_REPEATS, 1.0);
  // float strength = step(0.8, repeat_y);
  // strength -= step(0.8, repeat_x);
  

  // 4
  // float strength = bars(v_uv);

  // 5
  // float strength = abs(v_uv.x - 0.5);
  // strength += abs(v_uv.y - 0.5);

  // 6
  // float strength =  min(abs(v_uv.x - 0.5), abs(v_uv.y - 0.5));
  // float strength =  max(abs(v_uv.x - 0.5), abs(v_uv.y - 0.5));

  // 7
  float strength =  max(abs(v_uv.x - 0.5), abs(v_uv.y - 0.5));
  strength += step(0.2, strength);

  // 8

  
  gl_FragColor = vec4(strength, strength, strength, 1.0);
}