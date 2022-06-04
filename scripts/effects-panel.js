class EffectsPanel extends Application {
  constructor(){
    super();
  }

  refresh = debounce(this.render, 100);

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: "4e-easy-effects-panel",
      popOut: false,
      template: "modules/4e-effects-panel/static/effects-panel.html",
    })
  }

  get actor() {
    return canvas.tokens?.controlled[0]?.actor ?? game.user?.character ?? null;
  }

  async delete(effectId) {
    if (this.actor) {
      await this.actor.deleteEmbeddedDocuments("Item", [effectId]);
      return this;
    }
    return super.delete();
  }

  getData(options) {
    const data = {
      ...super.getData(options),
      actor: this.actor,
      effects: [],
    };

    data.effects = data.actor?.data?.items?.filter(x => x.data.name.includes('[Effect]')).map(effect =>  {
      const effectData = effect.clone({}, { keepId: true}).data;
      effectData.displayName = effectData.name.split("[Effect]").pop();
      return effectData;
    });

    return data;
  }

  activateListeners($html) {
    super.activateListeners($html);

    const $icons = $html.find("div[data-item-id]");

    // Remove an effect on right-click
    $icons.on("contextmenu", async (event) => {
      const $target = $(event.currentTarget);
      if ($target.attr("data-locked")) return;

      const actor = this.actor;
      const effect = actor?.items.get($target.attr("data-item-id") ?? "");
      if (!!effect) {
          await this.delete(effect.id);
      } else {
        this.refresh();
      }
    });
  }
}
