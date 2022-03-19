var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6c256481-ee72-4f59-bb2b-a081a61d2c46","40924c11-1699-4eed-9548-a0573cd317f3","61a1fb18-0ded-427f-ac5a-4d516691e578","07286d48-732b-4f1e-a441-14ccd4e950ff","339ba5e7-4712-4092-936d-8324b2b43992","8474b6f7-9cb3-4d95-a264-97d1426eee05","dc49bca1-f2c7-47e1-9410-c6fb3c8f6b32","6518aee8-54db-483f-be69-01e0989e49b7","4cdedd9a-1dd5-40cf-b2b7-3ab3696b6067"],"propsByKey":{"6c256481-ee72-4f59-bb2b-a081a61d2c46":{"name":"mouse_1","sourceUrl":null,"frameSize":{"x":90,"y":55},"frameCount":2,"looping":true,"frameDelay":12,"version":"xHy78zXx6s.Z..sVQ1U3pQjLu5tcXLha","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":110},"rootRelativePath":"assets/6c256481-ee72-4f59-bb2b-a081a61d2c46.png"},"40924c11-1699-4eed-9548-a0573cd317f3":{"name":"mouse_2","sourceUrl":null,"frameSize":{"x":100,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"A3WUCIESXRXeYU5IDRt_.UpRvbzA9_rc","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":60},"rootRelativePath":"assets/40924c11-1699-4eed-9548-a0573cd317f3.png"},"61a1fb18-0ded-427f-ac5a-4d516691e578":{"name":"cookie_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nHOnCD0VsHiM24D48VsqPD1PdLBE.tPh/category_food/cookie.png","frameSize":{"x":377,"y":377},"frameCount":1,"looping":true,"frameDelay":2,"version":"nHOnCD0VsHiM24D48VsqPD1PdLBE.tPh","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":377,"y":377},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nHOnCD0VsHiM24D48VsqPD1PdLBE.tPh/category_food/cookie.png"},"07286d48-732b-4f1e-a441-14ccd4e950ff":{"name":"chickenleg_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wm6yoiZkNbeL.YeBQKXi0W.YyTzrTxa5/category_food/chickenleg.png","frameSize":{"x":393,"y":393},"frameCount":1,"looping":true,"frameDelay":2,"version":"wm6yoiZkNbeL.YeBQKXi0W.YyTzrTxa5","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":393},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wm6yoiZkNbeL.YeBQKXi0W.YyTzrTxa5/category_food/chickenleg.png"},"339ba5e7-4712-4092-936d-8324b2b43992":{"name":"cat_1","sourceUrl":null,"frameSize":{"x":332,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"B_c2LnXOmNO2EP7KyLcCCXrnTJm99g0j","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":398},"rootRelativePath":"assets/339ba5e7-4712-4092-936d-8324b2b43992.png"},"8474b6f7-9cb3-4d95-a264-97d1426eee05":{"name":"cat_2","sourceUrl":null,"frameSize":{"x":332,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"knvaIC7EXT2Cfq6ihXcOOQ_qhBs_QB6m","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":398},"rootRelativePath":"assets/8474b6f7-9cb3-4d95-a264-97d1426eee05.png"},"dc49bca1-f2c7-47e1-9410-c6fb3c8f6b32":{"name":"cat_3","sourceUrl":"assets/api/v1/animation-library/gamelab/Y47mQRheJxMYu1Rgwn40SeQmfLMsXyJL/category_animals/cat.png","frameSize":{"x":332,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"Y47mQRheJxMYu1Rgwn40SeQmfLMsXyJL","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Y47mQRheJxMYu1Rgwn40SeQmfLMsXyJL/category_animals/cat.png"},"6518aee8-54db-483f-be69-01e0989e49b7":{"name":"texture_15_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FRtuEe_muZ55qvpx5ub8Gb1Vvsm1zTEY/category_backgrounds/texture_15.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FRtuEe_muZ55qvpx5ub8Gb1Vvsm1zTEY","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FRtuEe_muZ55qvpx5ub8Gb1Vvsm1zTEY/category_backgrounds/texture_15.png"},"4cdedd9a-1dd5-40cf-b2b7-3ab3696b6067":{"name":"cupcake_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VFvAjZCeLHhB39GafnRGfnrQhYdWk1xY/category_food/cupcake.png","frameSize":{"x":283,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"VFvAjZCeLHhB39GafnRGfnrQhYdWk1xY","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VFvAjZCeLHhB39GafnRGfnrQhYdWk1xY/category_food/cupcake.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = "serve";
var sprite = createSprite(200, 200, 400, 400);
sprite.setAnimation("texture_15_1");

var mouse = createSprite(200, 380, 10, 10);
mouse.setAnimation("mouse_1");
mouse.height = 40;
mouse.width = 40;
var cat1 = createSprite(40, 100, 30, 30);
cat1.setAnimation("cat_1");
cat1.height = 40;
cat1.width = 40;
var cat2 = createSprite(360, 200, 30, 30);
cat2.setAnimation("cat_2");
cat2.height = 40;
cat2.width = 40;
var cat3 = createSprite(40, 300, 30, 30);
cat3.setAnimation("cat_3");
cat3.height = 40;
cat3.width = 40;
var boundary1 = createSprite(5, 200,5,400);
var boundary2 = createSprite(395, 200,5,400);
var food1 = createSprite(90, 140, 10, 10);
food1.setAnimation("cupcake_1");
food1.height = 30;
food1.width = 30;
var food2 = createSprite(340, 280, 10, 10);
food2.setAnimation("chickenleg_1");
food2.height = 30;
food2.width = 30;
var food3 = createSprite(200, 345, 10, 10);
food3.setAnimation("cookie_1");
food3.height = 30;
food3.width = 30;

cat1.velocityX = 4;
cat2.velocityX = 4;
cat3.velocityX = 4;

var mouseHole = createSprite(200, 20, 50, 50);
function draw() {
background("rosyBrown");
drawSprites();

cat1.bounceOff(boundary1);
cat2.bounceOff(boundary1);
cat3.bounceOff(boundary1);
cat1.bounceOff(boundary2);
cat2.bounceOff(boundary2);
cat3.bounceOff(boundary2);
if (gameState==="serve"){
  fill("white");
  textSize(14);
  text("You are a mouse. Avoid all the cats and steal the foodstuffs.", 15, 100);
  fill("white");
  textSize(24);
  text("Press ENTER to start.", 90, 300);
}

if (keyDown("Enter")) {
    gameState="play"
  }
if (gameState==="play") {
 if (keyDown("up")) {
   mouse.y = mouse.y-5;
 }
 if (keyDown("down")) {
   mouse.y = mouse.y+5;
 }
 if (keyDown("left")) {
   mouse.x = mouse.x-5;
 }
 if (keyDown("right")) {
   mouse.x = mouse.x+5;
 }
 if ((mouse.isTouching(cat1))||(mouse.isTouching(cat2))||(mouse.isTouching(cat3))) {
   gameState="end"
 }
 if (mouse.isTouching(food1)) {
  food1.destroy();
  playSound("assets/category_collect/clicky_crunch.mp3", false);
}
if (mouse.isTouching(food2)) {
  food2.destroy();
  playSound("assets/category_collect/clicky_crunch.mp3", false);
}
if (mouse.isTouching(food3)) {
  food3.destroy();
  playSound("assets/category_collect/clicky_crunch.mp3", false);
}
 if (mouse.isTouching(mouseHole)) {
   gameState="end"
 }
}
if (gameState==="end") {
   if ((mouse.isTouching(cat1))||(mouse.isTouching(cat2))||(mouse.isTouching(cat3))) {
   cat1.velocityX = 0;
cat2.velocityX = 0;
cat3.velocityX = 0;
   mouse.setAnimation("mouse_2");
   fill("white");
   textSize(24);
   text("Game Over!", 150, 120);
   fill("white");
   textSize(20);
   text("To Try Again, press R", 150, 180);
 }
   if (mouse.isTouching(mouseHole)) {
     fill("white");
textSize(20);
     text("You Won!", 150, 180);
     fill("white");
textSize(20);
text("To Play Again, press R", 150, 210);
   }
   if (keyDown("R")) {
     mouse.x=200
     mouse.y=380
     cat1.velocityX = 4;
cat2.velocityX = 4;
cat3.velocityX = 4;
 mouse.setAnimation("mouse_1");
     gameState="serve";
   }
}
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
