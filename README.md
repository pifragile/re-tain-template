# re-tain.xyz Template
This is a simple template for creating generative artworks for re-tain.xyz.
You are free to do whatever you want, as long as
* you only use `randRT()` as your randomness source
* do not load anything from the internet (the sketch has to be self-contained)
* your sketch can handle window resizing

If you need a seed for `randomSeed` or `noiseSeed`, please use `randomSeedRT`.

To run the script with a specific hash, please add ?hash={HASH} to the url. Where {HASH} is a random string of 32 chars ([A-Za-z0-9]).  
If you would like to generate a random hash on refresh for development, uncomment the following line in `index.html`:
```
        //hash = getRandomHash()
```
Make sure that you comment out this line again before releasing your project.


## Preview Images
Call the `triggerPreview()` function at the point when you would like the preview image to be captured.
Preview image size will be 1000x1000px rendered in a headless Google Chrome on an Ubuntu machine.

## Questions?
Is you have any questions, send a DM on twitter to [@AndreFvchs](https://twitter.com/AndreFvchs).
