// You can write more code here

/* START OF COMPILED CODE */

class Tutorial extends Phaser.Scene {

	constructor() {
		super("Tutorial");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// expBar
		const expBar = this.add.tileSprite(1381, 810, 264, 100, "loading_bar_fill_center_yellow");

		// healthBar
		const healthBar = this.add.tileSprite(219, 810, 264, 100, "loading_bar_fill_center_red");

		// progress_bar_center_2
		const progress_bar_center_2 = this.add.tileSprite(1382, 810, 220, 100, "progress_bar_center");
		progress_bar_center_2.tileScaleX = 10;

		// progress_bar_container_left_5
		this.add.image(1226, 810, "progress_bar_container_left");

		// progress_bar_container_left_4
		const progress_bar_container_left_4 = this.add.image(1538, 810, "progress_bar_container_left");
		progress_bar_container_left_4.flipX = true;

		// progress_bar_container_left_3
		const progress_bar_container_left_3 = this.add.image(374, 810, "progress_bar_container_left");
		progress_bar_container_left_3.flipX = true;

		// progress_bar_center_1
		const progress_bar_center_1 = this.add.tileSprite(218, 810, 220, 100, "progress_bar_center");
		progress_bar_center_1.tileScaleX = 10;

		// progress_bar_container_left_2
		this.add.image(62, 810, "progress_bar_container_left");

		// loadingBar
		const loadingBar = this.add.tileSprite(341, -60, 924, 100, "loading_bar_fill_center_purple");
		loadingBar.scaleY = 3.406938093944062;
		loadingBar.setOrigin(0, 0);

		// progress_bar_center
		const progress_bar_center = this.add.tileSprite(800, 108, 220, 100, "progress_bar_center");
		progress_bar_center.scaleX = 3.406938093944062;
		progress_bar_center.scaleY = 3.406938093944062;
		progress_bar_center.tileScaleX = 10;

		// progress_bar_container_left_1
		const progress_bar_container_left_1 = this.add.image(1331, 108, "progress_bar_container_left");
		progress_bar_container_left_1.scaleX = 3.406938093944062;
		progress_bar_container_left_1.scaleY = 3.406938093944062;
		progress_bar_container_left_1.flipX = true;

		// progress_bar_container_left
		const progress_bar_container_left = this.add.image(269, 108, "progress_bar_container_left");
		progress_bar_container_left.scaleX = 3.406938093944062;
		progress_bar_container_left.scaleY = 3.406938093944062;

		// text_1
		const text_1 = this.add.text(501, 43, "", {});
		text_1.text = "This bar tells you\nhow many gems you \nneed to collect.";
		text_1.setStyle({ "fontFamily": "GRAVEDIGGER", "fontSize": "48px" });

		// text
		const text = this.add.text(29, 623, "", {});
		text.text = "This is your health.\n If this bar is \nempty, you die.";
		text.setStyle({ "color": "#000", "fontFamily": "GRAVEDIGGER", "fontSize": "48px" });

		// text_2
		const text_2 = this.add.text(1032, 566, "", {});
		text_2.text = "Gain experience by\ncollecting gems. \nWhen you level up\nyou get more health.";
		text_2.setStyle({ "color": "#000", "fontFamily": "GRAVEDIGGER", "fontSize": "48px" });

		// text_3
		const text_3 = this.add.text(501, 237, "", {});
		text_3.text = "Click gems to \ncollect them. Some\ngems are trapped. Gem\ncolor warns you of \nnearby danger. Collect\nall gems to advance\nto the next floor.";
		text_3.setStyle({ "color": "#000", "fontFamily": "GRAVEDIGGER", "fontSize": "48px" });

		this.expBar = expBar;
		this.healthBar = healthBar;
		this.loadingBar = loadingBar;
		this.text_1 = text_1;
		this.text = text;
		this.text_2 = text_2;
		this.text_3 = text_3;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	expBar;
	/** @type {Phaser.GameObjects.TileSprite} */
	healthBar;
	/** @type {Phaser.GameObjects.TileSprite} */
	loadingBar;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Text} */
	text_2;
	/** @type {Phaser.GameObjects.Text} */
	text_3;

	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    let displayTimer = this.time.addEvent({
      delay: 5000,
      repeat: 0,
      callback: function () {
        this.cameras.main.fade(2000, 0, 0, 0).on(
          "camerafadeoutcomplete",
          function () {
            this.scene.start("Dungeon");
          },
          this
        );
      },
      callbackScope: this,
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
