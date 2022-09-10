module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipe', [
      {
        id: 1,
        user_id: 1,
        title: 'Blueberry Muffins',
        image_urls: 'https://www.culinaryhill.com/blueberry-muffins/',
        cook_temperature: '375°',
        cook_time: '15-20 minutes',
        prep_time: '45 minutes',
        cook_instructions:
          'Preheat oven to 400 degrees. Prepare a muffin pan with cupcake liners. In a large bowl, sift together 2 cups flour, 1 cup sugar, baking powder, and ½ teaspoon salt. Set aside. In a medium bowl, whisk eggs until smooth. Add the ½ cup melted butter, milk, and vanilla, and whisk until combined. Add egg mixture to flour mixture and stir until combined. (Dough will be lumpy.) Fold in blueberries. Fill prepared muffin cups with batter. Bake until muffin centers bounce back when lightly pressed, about 18 to 22 minutes. Cool muffins on a rack for several minutes before removing from pan. Cool completely and store in an airtight container, up to 4 days.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        user_id: 2,
        title: 'Chicken Alfredo',
        image_urls: 'https://therecipecritic.com/chicken-alfredo-bake/',
        cook_temperature: 'Medium',
        cook_time: '30 minutes',
        prep_time: '50 minutes',
        cook_instructions:
          'Preheat Oven and Cook Pasta: Preheat the oven to 350 degrees. Bring a pot of water to a boil and add the penne. Cook according to package directions. Drain and rinse it and set aside. Make the Sauce: In a medium saucepan over medium hight heat, add butter, heavy whipping cream, and cream cheese. Cook until melted. Add the minced garlic, garlic powder, italian seasoning, and salt and pepper. Continue to whisk until smooth. Add the grated parmesan cheese. Bring to a simmer and continue to cook for about 3-5 minutes or until it starts to thicken. Add Pasta and Chicken to Sauce: Add the pasta back to the pot and pour the Alfredo Sauce over it. Then add in the chicken, and stir everything together. Bake: Add half of the pasta mixture to a 9×13 baking dish and top with 1 cup mozzarella. Then, add the rest of the pasta mixture to the dish and top with the remaining mozzarella and parmesan cheese. Bake for 20-30 minutes until the cheese is golden and bubbly.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        user_id: 3,
        title: 'Homemade Guacamole',
        image_urls: 'https://www.eatingbirdfood.com/wp-content/uploads/2022/03/guacamole-hero.jpg',
        cook_temperature: 'Refrigerated',
        cook_time: 'No Bake',
        prep_time: '15 minutes',
        cook_instructions:
          'Slice your avocados in half, remove the pits and scoop the flesh of the avocados into a large mixing bowl. Add the rest of your ingredients to the bowl. Stir together with a fork, until combined, but still chunky, mashing the avocado as you stir.Taste and adjust seasoning as needed. Serve with an assortment of raw vegetables and tortilla chips.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        user_id: 4,
        title: 'Homestyle Carrot Cake',
        image_urls: 'https://www.mycakeschool.com/recipes/carrot-cakescratch-recipe/',
        cook_temperature: '350°',
        cook_time: '35 minutes',
        prep_time: '1 hour',
        cook_instructions:
          'Preheat oven to 350 degrees. Line the bottoms of 3 (8 inch) or 2 (9 inch) round pans with wax or parchment paper, grease with shortening and flour the paper and pans for easy release when turning out. Whisk together for 30 seconds the flour, baking soda, baking powder, cinnamon, and salt. Set Aside. In the bowl of your mixer, add 2 cups sugar , 4 eggs, 1 cup oil and 1 tsp. vanilla. Mix 2 to 3 minutes at medium speed until well blended and light colored. With a spoon stir in the flour until moistened, then add the carrots, pecans crushed pineapple and coconut. Bake 35 minutes at 350 degrees or until a toothpick inserted in the center comes out clean. Refrain from opening the oven door or touching the center of the cake to test for doneness until very near the end of baking time or it could cause the cake to sink slightly in the center. Cool cake layers in pan for 10 minutes on a wire rack then turn out. Cool completely before frosting.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        user_id: 5,
        title: 'Spicy Tuna Roll',
        image_urls:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spicy-tuna-roll-2-1652806800.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
        cook_temperature: 'Refrigerated',
        cook_time: '50 minutes',
        prep_time: '30 minutes',
        cook_instructions:
          'In a medium bowl, toss cucumbers, vinegar, and salt. In another medium bowl, mix tuna, mayonnaise, Sriracha, and togarashi (if using). On a bamboo mat, lay 1 nori sheet. Using dampened hands, spread 2/3 c. rice evenly across 80% of the nori, leaving an uncovered border at end farthest from you. Working at end closest to you, arrange 3 tbsp. tuna mixture in a straight line horizontally on top of rice. Top tuna mixture with strips of cucumber and avocado. Lift bamboo mat from end closest to you and use it to guide edge of rice into a tight spiral. Squeeze firmly along mat to compact roll, then continue rolling in a spiral log to seal edge. Repeat with remaining ingredients. Let roll sit 10 minutes before slicing. Garnish with sesame seeds and scallions.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        user_id: 6,
        title: 'Chicken Tinga Tacos',
        image_urls:
          'https://www.thespruceeats.com/thmb/C0Rx3q8cglHwayLa3d7lnS7SuMg=/3000x2000/filters:fill(auto,1)/chicken-tinga-tinga-de-pollo-4773239-Hero_01-1bd1d960c02a4fdb812323b8c60fd55b.jpg',
        cook_temperature: 'High',
        cook_time: '6 hours',
        prep_time: '30 minutes',
        cook_instructions:
          'Gather the ingredients. Set the oven to broil. Place the sliced onions in a cast-iron skillet and put the whole Roma tomatoes on top. Place under the broiler close to the flame. Turn them periodically so that the tomatoes have a light char on all sides. Remove from the oven and place the tomatoes and onions into a large bowl. Add the chipotles, chopped garlic, and bay leaves. Toss to combine. Put the skillet you used for the tomatoes on the stove over a high flame. Add the oil. When hot but not smoking, add the chicken thighs. If necessary, cook the chicken in batches to avoid overcrowding the pan. To brown well, keep the meat in a single layer and leave undisturbed for a couple of minutes before turning. Add the browned (but not cooked through) chicken to a slow cooker. Scrape all the pan juices into the pot as well. Add the tomato, onion, garlic, chipotles, and bay leaves on top. Put the lid on the slow cooker and cook on the low setting for about 6 hours. Stir the contents of the crockpot and remove the bay leaves. All the ingredients will be quite soft. As you stir, the chicken will shred. You may have to exert a little effort breaking up the tomatoes. Season the stew with a splash of vinegar and salt to taste. Serve immediately.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        user_id: 7,
        title: 'Chicken Gyros',
        image_urls: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/07/Chicken-Gyros-Square-FS-58.jpg',
        cook_temperature: 'High',
        cook_time: '10-15 minutes',
        prep_time: '5 minutes',
        cook_instructions:
          'Preheat broiler to high. Place the shredded chicken in a bowl and add the oil, garlic, oregano, paprika, salt, pepper, lemon juice, red wine vinegar and honey. Toss it all together until the chicken is thoroughly coated. Transfer to a baking tray spread it out to an even layer. Place under the grill (or broiler) and grill for 3-4 minutes, until the edges start to get crispy. Now ladle over half of the chicken stock, toss everything together and place back under the grill again for another 3-4 minutes, until the edges start to get crispy. Repeat for a final time, adding the remaining stock over the chicken, tossing the chicken and placing back under the grill for a final 1-2 minutes, until the chicken is juicy but with crispy bits in there too. Turn off the grill and put the chicken to one side. Place warmed Greek flatbreads on plates. Top with shredded lettuce, cucumber pieces, chopped tomatoes and sliced red onion. Then spoon the chicken on top of the lettuce, in a line,down the centre of the flatbreads. Spoon over tzatziki and sprinkle on dried oregano, then roll up the flatbreads (you can secure with some foil or baking parchment) and serve.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        user_id: 8,
        title: 'Old Fashion Macaroni and Cheese',
        image_urls:
          'https://insanelygoodrecipes.com/wp-content/uploads/2022/05/Old-Fashioned-Macaroni-and-Cheese-in-a-Casserole.jpg',
        cook_temperature: '350°',
        cook_time: '40-50 minutes',
        prep_time: '30 minutes',
        cook_instructions:
          ' Cook the pasta. I like to cook elbow macaroni for only 4-5 minutes because it will continue to cook in the oven. If you cook the pasta until it’s ready to eat, it will likely turn mushy in the oven. Grease the dish. The pasta will stick to the bottom of the dish if you don’t. Combine the cooked macaroni, butter, cheese, salt, and pepper. Whisk together the milk and eggs. This mixture serves as the base of the sauce. When baked along with grated cheese, they turn into a thick and creamy mixture, kind of like savory custard. Pour the mixture over the macaroni. Bake the dish. It will need around 40 to 50 minutes at 350 degrees Fahrenheit. Add more cheese! This step is optional, but I like to add extra cheese and broil the dish for about 3-5 minutes. Let the dish sit for a few minutes before serving.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        user_id: 9,
        title: 'Caprese Salad',
        image_urls:
          'https://images.themodernproper.com/billowy-turkey/production/posts/2021/Caprese-Salad-7.jpeg?w=1280&auto=compress%2Cformat&fit=crop&dm=1629344391&s=36b54a6b62a78f893223b6f931f99b61',
        cook_temperature: 'Refrigerated',
        cook_time: '0 minutes',
        prep_time: '10 minutes',
        cook_instructions:
          'Whip up a simple Caprese salad dressing by stirring together the balsamic with some olive oil, garlic and brown sugar and simmering it until thickened slightly. Arrange the tomatoes and mozzarella on a platter, alternating tomato slices and mozzarella slices to make for a lovely, colorful, composed salad. Drizzle with the Caprese salad dressing, and finish with ribbons of fresh basil and salt and pepper to taste.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        user_id: 10,
        title: 'Grilled Chicken Caesar Salad',
        image_urls: 'https://reciperunner.com/wp-content/uploads/2017/07/Grilled-Chicken-Caesar-Salad-Photograph.jpg',
        cook_temperature: 'med-high',
        cook_time: '15 minutes',
        prep_time: '15 minutes',
        cook_instructions:
          'In a small bowl whisk together the ingredients for the marinade. Season the chicken with salt and pepper then place it in a freezer bag. Pour the marinade over the chicken, seal the bag, then massage it into the chicken with your hands. Refrigerate for at least an hour. For the caesar dressing, add all of the ingredients to a bowl and whisk together until combined. Cover and refrigerate until ready to serve. Preheat grill to medium-high heat and brush the grill grates with oil. Place the marinated chicken onto the grill and cook for 4-6 minutes depending on the thickness, then flip over and cook another 4-6 minutes or until cooked through (165 degrees F.). Remove the chicken from the grill and let it rest while you grill the romaine hearts and bread. Drizzle olive oil on the romaine hearts and slices of bread and season them with kosher salt and freshly ground black pepper. Place the romaine hearts cut side down on the grill and cook them for approximately 2-3 minutes or until they have nice grill marks. Grill the bread at the same time as the lettuce for approximately 1 minute per side. Once grilled, cut the bread into bite sized cubes. Place the grilled romaine hearts cut side up on a serving platter and top them with slices of the grilled chicken, cubes of the grilled bread, Caesar dressing, shredded parmesan cheese and season with kosher salt and freshly ground black pepper. Serve immediately.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        user_id: 11,
        title: 'The Best California Roll',
        image_urls:
          'https://hips.hearstapps.com/hmg-prod/images/20200108-seo-california-roll-delish-ehg-9131-jpg-1579900537.jpg',
        cook_temperature: 'med-high',
        cook_time: '1 hour 45 minutes',
        prep_time: '15 minutes',
        cook_instructions:
          'Wash rice several times in large bowl with cold water until water runs almost clear. Drain rice very well. In a small bowl, whisk together vinegar, sugar, and salt until sugar is dissolved. Reserve until ready to use. In a medium sauce pan over medium-high heat, add rice and 1 cup water, cover, and bring to a boil. Reduce heat to low and let simmer, covered, about 30 minutes or until water is absorbed. Remove from heat and let stand, covered, for 10 minutes. Transfer rice to a large, non-metallic, flat-bottomed bowl. Using a plastic spatula, repeatedly slice through rice at a sharp angle to break up lumps and separate grains while very gradually pouring in vinegar mixture. Cover seasoned rice with a damp cloth until ready to use. Place one nori sheet, shiny-side down, lengthwise across a clean, dry cutting board. Dip fingers of one hand into a bowl of water and shake off excess. Pick up one-fourth of the rice and place across the center of the nori sheet. Spread rice evenly across the nori, leaving a 1” strip of nori on the top side uncovered. Place bamboo mat on top of rice and with the help of your cutting board, flip it, so that the nori is facing you. Place one-fourth of the cucumber, the avocado, and and the crab in an even row across center of nori, making sure the filling extends to both ends of the surface lengthwise. Starting with edge closest to you, pick up mat using thumb and index fingers of both hands; use remaining fingers to hold the filling in place as you roll mat forward and away from you. Roll forward, pressing gently but firmly. Working quickly, repeat to make a total of four rolls. Roll each in sesame seeds and slice into 8 pieces. Serve immediately with soy sauce.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        user_id: 12,
        title: 'Chicken Tikka Masala',
        image_urls: 'https://s23209.pcdn.co/wp-content/uploads/2019/02/Easy-Chicken-Tikka-MasalaIMG_8253.jpg',
        cook_temperature: 'med-high',
        cook_time: '20 minutes',
        prep_time: '10 minutes',
        cook_instructions:
          'In a large saucepan of 2 cups water, cook rice according to package instructions; set aside. Heat canola oil in a large stockpot or Dutch oven over medium heat. Season chicken with salt and pepper, to taste. Add chicken and onion to the stockpot and cook until golden, about 4-5 minutes. Stir in tomato paste, garlic, ginger, garam masala, chili powder and turmeric until fragrant, about 1 minute. Stir in tomato sauce and chicken stock; season with salt and pepper, to taste. Bring to a boil; reduce heat and simmer, stirring occasionally, until reduced and slightly thickened, about 10 minutes. Stir in heavy cream until heated through, about 1 minute. Serve immediately with rice, garnished with cilantro, if desired.',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipe', null, {});
  },
};
