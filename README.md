# nes-tetris-piece-generation

This is just a couple of scripts I've found useful in generating NES Tetris piece sequences. If you put valid .txt files in `compilelist.js` and run it, you should be able to compile results from the piece sequences.

By messing around with variables in `rng.js` you can iterate millions of times and see what piece sequences look like. I also added a little support for running something like 1000 piece sequence N times. This would allow you to figure out a good confidence interval for what results you saw from a transcribed match.

Someone is very welcome to tidy this repo up and make it useful to someone other than me, but I thought it best I provide my code here so that my video lets you play with the numbers yourself.