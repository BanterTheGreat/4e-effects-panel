Hooks.on("init", () => { // Move the Panel to Ui-Middle
  game.effectsPanel = new EffectsPanel();

  if (document.querySelector("#ui-top") !== null) {
    // Template element for effects-panel
    const uiTop = document.querySelector("#ui-top");
    const template = document.createElement("template");
    template.setAttribute("id", "4e-easy-effects-panel");
    uiTop?.insertAdjacentElement("afterend", template);
  }

  game.effectsPanel.render(true);
})

Hooks.on("controlToken", () => {
  game.effectsPanel.refresh();
})

Hooks.on("createItem", () => {
  game.effectsPanel.refresh(); // Find a way to hook into the actor's onEmbeddedDocumentsUpdate
})

Hooks.on("deleteItem", () => {
  game.effectsPanel.refresh();
})

// Allow Items to be dropped on Tokens in the Canvas.
Hooks.on("dropCanvasData", (canvas, data) => {
  const dropTarget = canvas.tokens.placeables.find((token) => {
    const maximumX = token.x + (token.hitArea?.right ?? 0);
    const maximumY = token.y + (token.hitArea?.bottom ?? 0);
    return data.x >= token.x && data.y >= token.y && data.x <= maximumX && data.y <= maximumY;
  });

  const actor = dropTarget?.actor;

  if (actor && data.type === "Item") {
      if (
        actor.sheet && ["Player Character", "NPC"].includes(actor.type)
      ) {
          actor.sheet._onDropItem({}, data);
      }
      return false; // Prevent modules from doing anything further
  }
  return true;
})
