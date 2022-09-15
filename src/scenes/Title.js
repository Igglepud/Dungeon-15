// You can write more code here

/* START OF COMPILED CODE */

class Title extends Phaser.Scene {
  constructor() {
    super("Title");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {
    // 1
    this.add.tileSprite(857, 423, 2048, 1280, "floor", "1");

    // pillar_base_02
    this.add.image(224, 778, "pillar_base_02");

    // pillar_base
    this.add.image(1331.3333333333333, 778, "pillar_base_02");

    // pillar_top_left_end
    this.add.image(355, 262, "pillar_top_left_end");

    // pillar_part_small_1
    this.add.image(1331.3333333333333, 477.5, "pillar_part_small");

    // pillar_top_right_end
    this.add.image(1194, 274, "pillar_top_right_end");

    // door
    const door = this.add.image(767, 415, "door_closed");
    door.scaleX = 1.2909959409300793;
    door.scaleY = 1.2909959409300793;

    // overlay
    const overlay = this.add.image(786, 444, "overlay");
    overlay.scaleX = 2.110660741707317;
    overlay.scaleY = 1.6429461766822357;
    overlay.alpha = 0.25;
    overlay.alphaTopLeft = 0.25;
    overlay.alphaTopRight = 0.25;
    overlay.alphaBottomLeft = 0.25;
    overlay.alphaBottomRight = 0.25;

    this.door = door;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Image} */
  door;

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
    this.sound.play("titleSound");
    this.door.setInteractive().on(
      "pointerdown",
      function () {
        this.clickText.setText("");
        this.door.setTexture("doorOpen");
        this.sound.play("doorCreak");
        this.cameras.main.pan(this.door.x, this.door.y, 3000);
        this.cameras.main.zoomTo(5, 3000);
        this.cameras.main.fade(3000, 0, 0, 0).on(
          "camerafadeoutcomplete",
          function () {
            this.sound.stopAll();
            this.scene.start("Tutorial");
          },
          this
        );
      },
      this
    );

    this.clickText = this.add
      .text(this.door.x, this.door.y, "Click Door\n To Enter", {
        fontSize: 128,
        fontFamily: "GRAVEDIGGER",
      })
      .setStroke(0x000000, 1)
      .setFill(0xff0000)
      .setShadow(4, 4, "rgba(255,144,0,1)", 0);
    this.clickText.setPosition(
      this.door.x - this.clickText.width / 2,
      this.door.y
    );
    this.clickText.moveTween = this.tweens.add({
      targets: this.clickText,
      alpha: 0,
      yoyo: true,
      repeat: -1,
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
