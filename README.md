# re-tain.xyz Template
This is a simple template for creating generative artworks for re-tain.xyz.
You are free to do whatever you want, as long as
* you only use `randRT()` as your randomness source
* do not load anything from the internet (the sketch has to be self-contained)
* your sketch can handle window resizing

If you need a seed for `randomSeed` or `noiseSeed`, please use `randomSeedRT`.

If you would like to generate a random hash on refresh for development, uncomment the following line in `index.html`:
```
        //hash = getRandomHash()
```

## Preview Images
Call the `triggerPreview()` function at the point when you would like the preview image to be captures.
Preview image size will be 1000x1000px rendered in a headless Google Chrome on an Ubuntu machine.

## Questions?
Is you have any questions, send a DM on twitter to [@AndreFvchs](https://twitter.com/AndreFvchs).
