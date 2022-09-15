// You can write more code here

/* START OF COMPILED CODE */

class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
    const gameW = this.sys.game.config.width;
    const gameH = this.sys.game.config.height;
    this.time.addEvent({
      callback: () => {
        this.scene.start("Title");
      },
      delay: 5000,
    });
    this.endText = this.add
      .text(800, 450, "You died...", {
        fontSize: 128,
        fontFamily: "GRAVEDIGGER",
      })
      .setFill(0x000000)
      .setStroke(0x000000, 1);
    this.endText
      .setPosition(
        gameW / 2 - this.endText.width / 2,
        gameH / 2 - this.endText.height / 2
      )
      .setText("");

    typewriteText(this, "You died...");
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
function typewriteText(scene, text) {
  const length = text.length;
  let i = 0;
  scene.time.addEvent({
    callback: () => {
      scene.endText.text += text[i];
      ++i;
    },
    repeat: length - 1,
    delay: 200,
  });
}
