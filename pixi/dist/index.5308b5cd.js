const app = new PIXI.Application({
    width: 260,
    height: 240,
    background: 0x000000
});
const sprite = PIXI.Sprite.from("./BurgerKing.png");
const bloom = new PIXI.filters.AdvancedBloomFilter({
    threshold: 0.9,
    bloomScale: 1.5,
    brightness: 0.5,
    blur: 3.6,
    quality: 9
});
Object.assign(sprite, {
    width: 260,
    height: 240,
    filters: [
        bloom
    ]
});
app.stage.addChild(sprite);
const container = document.querySelector("#calva");
container.appendChild(app.view);

//# sourceMappingURL=index.5308b5cd.js.map
