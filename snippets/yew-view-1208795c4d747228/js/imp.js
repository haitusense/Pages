export function hello() {
  return "js test msg"
}
export function hello2() {
  return "js test msg2"
}

export function scale(scale) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.scale(scale, scale);
}

// export function toWebView() {
//   const canvas = document.getElementById('canvas');
//   const ctx = canvas.getContext('2d');
//   ctx.save();
//   ctx.scale(scale, scale);
// }