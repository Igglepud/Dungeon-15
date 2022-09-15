window.addEventListener("load", function () {
  var game = new Phaser.Game({
    width: 1600,
    height: 900,
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  });

  game.scene.add("Preload", Preload);
  game.scene.add("Dungeon", dungeon);
  game.scene.add("Title", Title);
    game.scene.add("Tutorial", Tutorial);

  game.scene.add("GameOver", GameOver);

  game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack("pack", "assets/preload-asset-pack.json");
    new FontFace("GRAVEDIGGER", "url(assets/GRAVEDIGGER.ttf)")
      .load()
      .then(function (loaded) {
        document.fonts.add(loaded);
      });
    this.load.on(Phaser.Loader.Events.COMPLETE, () =>
      this.scene.start("Preload")
    );
  }
}
