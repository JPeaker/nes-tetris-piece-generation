module.exports = (data) => {
  const pieces = ['T','J','Z','O','S','L','I'];
  const returnGuy = {
    total: 0
  };

  pieces.forEach(piece => {
    returnGuy[piece] = {};
    const subtotal = Object.values(data[piece]).reduce((a,b) => a+b, 0);
    pieces.forEach(piece2 => {
      if (data[piece] && data[piece][piece2]) {
        returnGuy[piece][piece2] = data[piece][piece2] / subtotal;
      } else {
        returnGuy[piece][piece2] = 0;
      }
    });

    returnGuy[piece].total = subtotal;
    returnGuy.total += subtotal;
  })

  pieces.forEach(piece => {
    returnGuy[piece].proportion = returnGuy[piece].total / returnGuy.total;
  });

  return returnGuy;
}