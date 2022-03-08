import * as Phaser from "phaser";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game",
};

const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 528;

export class GameScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.load.image("tiles", "src/assets/sprites/tmw_desert_spacing.png");
    this.load.tilemapTiledJSON("desert_map", "src/assets/sprites/desert.json");
  }

  public create() {
    const desertTileMap = this.make.tilemap({ key: "desert_map" });
    desertTileMap.addTilesetImage("Desert", "tiles");
  }

  public update() {}
}

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Sample",
  render: {
    antialias: false,
  },
  type: Phaser.AUTO,
  scene: GameScene,
  scale: {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "game",
};

export const game = new Phaser.Game(gameConfig);

// class CharacterFollow extends Phaser.Scene {
//   constructor(config) {
//     super(config);
//   }
//
//   preload() {
//     this.load.image("dino", Sprite);
//     this.load.image("tiles", Tiles);
//     this.load.spritesheet("wizard", SpriteSheet, {
//       frameWidth: 32,
//       frameHeight: 48,
//       spacing: 0,
//     });
//     this.load.spritesheet("chara", Chara, {
//       frameWidth: 32,
//       frameHeight: 32,
//       spacing: 0,
//     });
//     this.load.tilemapTiledJSON("map", Map);
//   }
//
//   create(key, config) {
//     map = this.make.tilemap({ key: "map" });
//     let tiles = map.addTilesetImage("Desert", "tiles");
//     let layer = map.createStaticLayer("Ground", tiles, 0, 0);
//
//     this.cameras.main.setBounds(0, 0, 800, 600);
//
//     this.dino = this.add.image(400, 300, "dino");
//     this.dino = this.add.image(200, 300, "dino");
//
//     this.cameras.main.setZoom(2);
//
//     this.cursors = this.input.keyboard.createCursorKeys();
//
//     this.keys = this.input.keyboard.addKeys({
//       a: Phaser.Input.Keyboard.KeyCodes.A,
//       s: Phaser.Input.Keyboard.KeyCodes.S,
//       d: Phaser.Input.Keyboard.KeyCodes.D,
//       w: Phaser.Input.Keyboard.KeyCodes.W,
//     });
//     let help = this.add.text(
//       this.cameras.main.displayWidth - 200,
//       this.cameras.main.displayHeight - 150,
//       "Arrow Keys to move the Map",
//       {
//         fontFamily: "Arial",
//         fontSize: "12px",
//         padding: { x: 10, y: 5 },
//         backgroundColor: "#000000",
//         fill: "#ffffff",
//       }
//     );
//     help.setScrollFactor(0);
//
//     this.anims.create({
//       key: "float",
//       frames: this.anims.generateFrameNumbers("wizard", { start: 0, end: 8 }),
//       frameRate: 6,
//       repeat: -1,
//     });
//     this.anims.create({
//       key: "chara_front",
//       frames: this.anims.generateFrameNumbers("chara", { start: 0, end: 2 }),
//       frameRate: 6,
//       repeat: -1,
//     });
//     this.anims.create({
//       key: "chara_back",
//       frames: this.anims.generateFrameNumbers("chara", { start: 3, end: 6 }),
//       frameRate: 6,
//       repeat: -1,
//     });
//
//     this.witch = this.add.sprite(430, 300, "wizard");
//     this.witch.setScale(1);
//     this.witch.play("float");
//     this.chara = this.add.sprite(400, 300, "chara");
//     this.chara.setScale(1);
//     this.chara.play("chara_front");
//
//     this.cameras.main.startFollow(this.chara, true, 0.09, 0.09);
//   }
//
//   updateDirect() {}
//
//   update(time, delta) {
//     if (this.cursors.left.isDown || this.keys.a.isDown) {
//       this.chara.flipX = false;
//       this.chara.x -= 2.5;
//     } else if (this.cursors.right.isDown || this.keys.d.isDown) {
//       this.chara.flipX = true;
//       this.chara.x += 2.5;
//     }
//
//     if (this.cursors.up.isDown || this.keys.w.isDown) {
//       this.chara.setAngle(0);
//       this.chara.y -= 2.5;
//       this.chara.play("chara_back");
//     } else if (this.cursors.down.isDown || this.keys.s.isDown) {
//       this.chara.setAngle(0);
//       this.chara.y += 2.5;
//       this.chara.play("chara_front");
//     }
//   }
// }
//
// const config = {
//   type: Phaser.AUTO,
//   parent: "phaser-example",
//   width: 800,
//   height: 600,
//   scene: [CharacterFollow],
//   pixelArt: true,
//   physics: {
//     default: "arcade",
//   },
// };
//
// const game = new Phaser.Game(config);
