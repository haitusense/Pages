export function hello() {
  return "view test"
}

export function scale(scale) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.scale(scale, scale);
}

export function get_mouse_position(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  const x = evt.clientX - rect.left;
  const y = evt.clientY - rect.top;
  // const dst = wasm.Position.new(, );
  return { x:x ,y:y, cx:evt.clientX, cy:evt.clientY,};
}

export function print_position(canvas2, x, y, message) {
  const canvas = document.getElementById('canvas2');
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = '6pt "MSゴシック"';
  context.fillStyle = 'black';
  context.fillText(message, x, y);
}

// export function toWebView() {
//   const canvas = document.getElementById('canvas');
//   const ctx = canvas.getContext('2d');
//   ctx.save();
//   ctx.scale(scale, scale);
// }