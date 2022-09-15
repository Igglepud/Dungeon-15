// You can write more code here

/* START OF COMPILED CODE */

class dungeon extends Phaser.Scene {
  constructor() {
    super("Dungeon");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorPreload() {
    this.load.pack("asset-pack", "assets/asset-pack.json");
  }

  /** @returns {void} */
  editorCreate() {
    // background
    const background = this.add.image(-818, 579, "example");

    // progress_bar_container_left
    const progress_bar_container_left = this.add.image(
      282,
      144,
      "progress_bar_container_left"
    );
    progress_bar_container_left.scaleX = 3.406938093944062;
    progress_bar_container_left.scaleY = 3.406938093944062;

    // progress_bar_container_left_1
    const progress_bar_container_left_1 = this.add.image(
      1344,
      144,
      "progress_bar_container_left"
    );
    progress_bar_container_left_1.scaleX = 3.406938093944062;
    progress_bar_container_left_1.scaleY = 3.406938093944062;
    progress_bar_container_left_1.flipX = true;

    // progress_bar_center
    const progress_bar_center = this.add.tileSprite(
      813,
      144,
      220,
      100,
      "progress_bar_center"
    );
    progress_bar_center.scaleX = 3.406938093944062;
    progress_bar_center.scaleY = 3.406938093944062;
    progress_bar_center.tileScaleX = 10;

    // loadingBar
    const loadingBar = this.add.tileSprite(
      354,
      -24,
      924,
      100,
      "loading_bar_fill_center_purple"
    );
    loadingBar.scaleY = 3.406938093944062;
    loadingBar.setOrigin(0, 0);

    // progress_bar_container_left_2
    this.add.image(75, 846, "progress_bar_container_left");

    // progress_bar_center_1
    const progress_bar_center_1 = this.add.tileSprite(
      231,
      846,
      220,
      100,
      "progress_bar_center"
    );
    progress_bar_center_1.tileScaleX = 10;

    // progress_bar_container_left_3
    const progress_bar_container_left_3 = this.add.image(
      387,
      846,
      "progress_bar_container_left"
    );
    progress_bar_container_left_3.flipX = true;

    // progress_bar_container_left_4
    const progress_bar_container_left_4 = this.add.image(
      1551,
      846,
      "progress_bar_container_left"
    );
    progress_bar_container_left_4.flipX = true;

    // progress_bar_container_left_5
    this.add.image(1239, 846, "progress_bar_container_left");

    // progress_bar_center_2
    const progress_bar_center_2 = this.add.tileSprite(
      1395,
      846,
      220,
      100,
      "progress_bar_center"
    );
    progress_bar_center_2.tileScaleX = 10;

    // healthBar
    const healthBar = this.add.tileSprite(
      232,
      846,
      264,
      100,
      "loading_bar_fill_center_red"
    );

    // expBar
    const expBar = this.add.tileSprite(
      1394,
      846,
      264,
      100,
      "loading_bar_fill_center_yellow"
    );

    // bottom_connector
    this.add.image(-416, 480, "bottom_connector");

    // overlay
    const overlay = this.add.image(804, 465, "overlay");
    overlay.scaleX = 2.1063155665951636;
    overlay.scaleY = 1.519290603205571;
    overlay.flipX = true;
    overlay.alpha = 0.25;
    overlay.alphaTopLeft = 0.25;
    overlay.alphaTopRight = 0.25;
    overlay.alphaBottomLeft = 0.25;
    overlay.alphaBottomRight = 0.25;

    this.background = background;
    this.loadingBar = loadingBar;
    this.healthBar = healthBar;
    this.expBar = expBar;
    this.overlay = overlay;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Image} */
  background;
  /** @type {Phaser.GameObjects.TileSprite} */
  loadingBar;
  /** @type {Phaser.GameObjects.TileSprite} */
  healthBar;
  /** @type {Phaser.GameObjects.TileSprite} */
  expBar;
  /** @type {Phaser.GameObjects.Image} */
  overlay;

  /* START-USER-CODE */

  // Write your code here
  init(data) {
    if (data.player) {
      this.player = data.player;
      this.allStatsLoaded = true;
    }
  }
  preload() {
    this.load.scenePlugin({
      key: "rexboardplugin",
      url: "lib/rexboardplugin.js",
      sceneKey: "rexBoard",
    });
  }
  create() {
    this.editorCreate();

    let postFxPlugin = this.plugins.get("rexkawaseblurpipelineplugin");
    let postFxPipeline = postFxPlugin.add(this.cameras.main, {
      blur: 4,
      quality: 8,
    });

    const scene = this;
    const gameW = this.sys.game.config.width;
    const gameH = this.sys.game.config.height;
    scene.gameStarted = false;
    if (scene.allStatsLoaded == true) {
    } else {
      this.player = {
        distance: 1,
        maxHealth: 100,
        health: 100,
        exp: 0,
        nextLevel: 30,
      };
    }
    const player = this.player;
    const distance = this.player.distance;
    const hexSize = gameW / 6 / (distance + 1);
    const xLocation = gameW / 2 - hexSize * (distance * 2);
    const yLocation = gameH / 2 - hexSize * (distance * 1.5);
    this.totalGems = 0;
    this.totalBombs = 0;
    this.gemsCollected = 0;

    scene.sound.play("dungeonMusic");

    this.loadingBar.setCrop(0, 0, 0, this.loadingBar.height);
    this.healthBar.setCrop(
      0,
      0,
      this.healthBar.width * (player.health / player.maxHealth),
      this.healthBar.height
    );
    this.expBar.setCrop(
      0,
      0,
      this.expBar.width * (player.exp / player.nextLevel),
      this.expBar.height
    );
    this.bgCamera = this.cameras.add(
      this.cameras.main.x,
      this.cameras.main.y,
      gameW,
      gameH,
      false,
      "bgCam"
    );
    this.bgCamera.ignore(this.background);

    this.background.setOrigin(0, 0);
    this.background.setPosition(
      Phaser.Math.Between(0, -this.background.width / 2),
      Phaser.Math.Between(0, -this.background.height / 2)
    );
    let backgroundTween = scene.tweens.add({
      targets: this.background,
      x: function () {
        return Phaser.Math.Between(0, -scene.background.frame.width / 2);
      },

      y: function () {
        return Phaser.Math.Between(0, -scene.background.frame.height / 2);
      },

      duration: 10000,
      repeat: -1,
      callbackScope: this,
    });
    //this.bg = this.add.rectangle(gameW / 2, gameH / 2, gameW, gameH, 0xffffff);
    this.board = scene.rexBoard.add.board({
      grid: {
        gridType: "hexagonGrid",
        x: xLocation,
        y: yLocation,
        // cellWidth: gameW / 50,
        //cellHeight: gameH / 50,
        size: hexSize,
        staggeraxis: 4,
        staggerindex: "odd",
      },
      // width: 60,
      // height: 60,
      // wrap: false,
      // infinity: false,
    });

    this.floor = this.add.container();

    let position = { x: 0, y: 0 };
    for (let i = 0; i < (gameW * gameH) / 256; i++) {
      let tile = this.add
        .image(position.x, position.y, "floor", "" + Phaser.Math.Between(1, 8))
        .setOrigin(0, 0);
      tile.setScale(this.board.grid._width / tile.width);
      position.x += tile.width * tile.scaleX;
      if (position.x >= gameW) {
        position.x = 0;
        position.y += tile.height * tile.scaleY;
      }
      this.floor.add(tile);
    }

    //this.floor.setPosition(gameW / 2, 0);
    let tileXYArray = this.board.fit(
      scene.rexBoard.hexagonMap.hexagon(this.board, distance)
    );
    let graphics = this.add.graphics({
      lineStyle: {
        width: 1,
        color: 0x000000,
        alpha: 1,
      },
    });
    graphics.fillStyle(0xffff00, 1);
    this.board.x = 300;
    this.board.y = 300;
    for (let i = 0; i < tileXYArray.length; i++) {
      let tileXY = tileXYArray[i];
      let board = this.board;

      graphics
        .strokePoints(board.getGridPoints(tileXY.x, tileXY.y, true), true)
        .fill()
        .setVisible(false);

      let mask = graphics.createBitmapMask(graphics);
      mask.invertAlpha = false;
      this.floor.setMask(mask);
      let bobs = this.floor.getAll();
      let graphics2 = this.add
        .graphics({
          lineStyle: {
            width: 4 * bobs[0].scaleX,
            color: 0xffffff,
            alpha: 1,
          },
        })
        .strokePoints(board.getGridPoints(tileXY.x, tileXY.y, true), true); //create map
      let chess = scene.add.sprite(tileXY.x, tileXY.y, "gems", "8");
      chess.bombNumber = 0;
      chess.setScale(
        scene.board.grid._width / chess.width,
        scene.board.grid._height / chess.height
      );
      this.board.addChess(chess, tileXY.x, tileXY.y, tileXY.z);
      chess.text = scene.add.text(chess.x, chess.y, "", {
        fontSize: chess.width * chess.scale,
      });
      chess.text.setText("").setColor("0x000000").setOrigin(0.5);
    }
    //this is where gameplay begins
    this.board.setInteractive();
    let board = this.board;
    scene.totalGems = board.getAllChess().length;
    board.on("gameobjectdown", function (pointer, gameobject) {
      gameobject.text.setVisible(false);
      if (scene.gameStarted == false) {
        let startHex = board.chessToTileXYZ(gameobject);
        board.removeChess(gameobject);

        //populate bombs
        scene.gameStarted = true;
        let tiles = board.getAllChess();
        let bombs = Phaser.Math.CeilTo(tiles.length / 4);
        scene.totalGems -= bombs;
        scene.totalBombs = bombs;
        while (bombs != 0) {
          for (let i = 0; i < tiles.length; i++) {
            let selection = Phaser.Math.Between(1, 10);
            if (selection === 1 && bombs > 0 && tiles[i].bombNumber != 1) {
              tiles[i].bombNumber = 1;
              bombs--;
            }
          }
        }
        board.addChess(gameobject, startHex.x, startHex.y, startHex.z);
      }
      //track neighbors and add text
      if (gameobject.bombNumber != 1) {
        checkNeighbors(scene, board, gameobject);
      } else {
        trap(scene, player, gameobject);
        // scene.scene.restart({ distance: scene.distance });
      }
    });

    //end gameplay
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
function lightning(scene, gem) {
  gem.play("lightningExplosion").on("animationcomplete", function () {
    scene.bgCamera.flash(250, 255, 0, 0);
  });
  scene.sound.play("electricSound");
}
function flameExplode(scene, gem) {
  gem.play("flameExplode").on("animationcomplete", function () {
    scene.bgCamera.flash(250, 255, 0, 0);
  });
  scene.sound.play("flameSound");
}
function iceExplode(scene, gem) {
  gem.play("iceExplode").on("animationcomplete", function () {
    scene.bgCamera.flash(250, 255, 0, 0);
  });
  scene.sound.play("iceSound");
}

function trap(scene, player, gem) {
  gem.depth = 99;

  let trapNumber = Phaser.Math.Between(1, 3);
  if (trapNumber == 1) {
    lightning(scene, gem);
  } else if (trapNumber == 2) {
    flameExplode(scene, gem);
  } else if (trapNumber == 3) {
    iceExplode(scene, gem);
  }

  player.health -= Phaser.Math.Between(7, 58);
  let healthCrop = (player.health / player.maxHealth) * scene.healthBar.width;
  if (healthCrop < 0) {
    healthCrop = 0;
  }
  scene.healthBar.moveTween = scene.tweens.add({
    targets: scene.healthBar._crop,
    width: healthCrop,
    duration: 1500,
    callbackScope: scene,
    onComplete: function () {
      if (healthCrop <= 0) {
        scene.bgCamera
          .fade(2000, 0, 0, 0)
          .on("camerafadeoutcomplete", function () {
            scene.sound.stopAll();
            scene.scene.start("GameOver");
          });
      }
    },
  });
}

function checkNeighbors(scene, board, piece) {
  scene.sound.play("collected");

  let neighbors = board.getNeighborChess(piece);
  if (piece != null) {
    if (piece.bombNumber != 1) {
      board.removeChess(piece);
      piece.setFrame("7");
      piece.depth = 99;
      piece.setBlendMode(Phaser.BlendModes.ADD);
      if (!piece.moveTween) {
        piece.moveTween = scene.tweens.add({
          targets: [piece],
          y: -piece.height,
          duration: 1500,
          onComplete: function () {
            scene.gemsCollected++;
            scene.player.exp += 5;
            if (scene.player.exp >= scene.player.nextLevel) {
              scene.player.maxHealth += Phaser.Math.CeilTo(
                scene.player.maxHealth * 0.1
              );
              scene.player.nextLevel += Phaser.Math.CeilTo(
                scene.player.nextLevel * 0.5
              );
              scene.player.health = scene.player.maxHealth;
              scene.player.exp = 0;
              scene.expBar.setCrop(0, 0, 0, scene.expBar.height);
              scene.healthBar.setCrop(
                0,
                0,
                scene.healthBar.width *
                  (scene.player.health / scene.player.maxHealth),
                scene.healthBar.height
              );
            }
            let crop = scene.gemsCollected / scene.totalGems;
            scene.loadingBar.moveTween = scene.tweens.add({
              targets: scene.loadingBar._crop,
              width: crop * scene.loadingBar.width,

              duration: 3000,
              callbackScope: scene,
              onComplete: function () {
                if (scene.gemsCollected == scene.totalGems) {
                  scene.sound.stopAll();
                  scene.player.distance++;
                  scene.scene.restart({ player: this.player });
                }
              },
            });
            let expCrop = scene.player.exp / scene.player.nextLevel;
            if (expCrop > 1) {
              expCrop = 1;
            }
            scene.expBar.moveTween = scene.tweens.add({
              targets: scene.expBar._crop,
              width: expCrop * scene.expBar.width,
              callbackScope: this,
              onComplete: function () {},
            });
            piece.visible = false;
          },
          callbackScope: this,
        });
      }
      if (neighbors != null) {
        for (let i = 0; i < neighbors.length; i++) {
          let displayNumber = 0;
          let otherNeighbors = board.getNeighborChess(neighbors[i]);
          if (otherNeighbors != null) {
            for (let j = 0; j < otherNeighbors.length; j++) {
              if (otherNeighbors[j].bombNumber == 1) {
                displayNumber++;
              }
            }
          }
          if (displayNumber != 0) {
            let displayTimer = scene.time.addEvent({
              delay: 500,
              repeat: 0,
              callback: function () {
                neighbors[i].setFrame("" + displayNumber);
              },
              callbackScope: this,
            });
          } else if (displayNumber == 0) {
            let displayTimer = scene.time.addEvent({
              delay: 500,
              repeat: 0,
              callback: function () {
                checkNeighbors(scene, board, neighbors[i]);
              },
              callbackScope: this,
            });
          }
        }
      }
    }
  }
}
