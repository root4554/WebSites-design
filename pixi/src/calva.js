import { Application, Sprite } from "pixi.js";
import { AdvancedBloomFilter } from "pixi-filters";

const app = new Application({
  width: 260,
  height: 240,
});

const sprite = Sprite.from("/BurgerKing3.PNG");
const bloom = new AdvancedBloomFilter({
  threshold: 0.4,
  bloomScale: 1.5,
  brightness: 1.5,
  blur: 0,
  quality: 9,
});

Object.assign(sprite, {
  width: 260,
  height: 240,
  filters: [bloom],
});

app.stage.addChild(sprite);

const container = document.querySelector("#calva");
container.appendChild(app.view);
