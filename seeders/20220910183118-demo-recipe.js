module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipes', [
      {
        id: 1,
        user_id: 1,
        title: 'Blueberry Muffins',
        image_urls:
          'https://www.culinaryhill.com/wp-content/uploads/2022/08/Blueberry-Muffins-Culinary-Hill-1200x800-1.jpg',
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
        user_id: 1,
        title: 'Chicken Alfredo',
        image_urls: 'https://www.jessicagavin.com/wp-content/uploads/2019/08/chicken-alfredo-8-1200.jpg',
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
        user_id: 1,
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
        user_id: 1,
        title: 'Homestyle Carrot Cake',
        image_urls:
          'https://www.thespruceeats.com/thmb/8gWQEAFqWGoLBka1q-j4YOHhI1o=/2667x2000/smart/filters:no_upscale()/baby-food-carrot-cake-cream-cheese-3052447-7a91bc5a0cdb445ebde316665f10a8d1.jpg',
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
        user_id: 1,
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
        user_id: 1,
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
      {
        id: 13,
        user_id: 3,
        title: 'Chicken and Dumplings',
        image_urls:
          'https://thenovicechefblog.com/wp-content/uploads/2018/10/Homemade-Chicken-and-Dumplings-Recipe-1-sm-e1539893839955-735x774.jpg',
        cook_temperature: 'med-high',
        cook_time: '35 minutes',
        prep_time: '20 minutes',
        cook_instructions:
          'Mix dry ingredients: Add the dry ingredients (flour, baking powder, pepper, salt and thyme) into a medium sized bowl and whisk together. Add wet ingredients: Add in the butter and milk, mix it together using a wooden spoon, until dough ball forms. Cook dumplings: Drop the dumplings into the simmering soup with a cookie scoop and let cook! That’s it! Sauté your veggies: In a large pot melt the butter over medium-high heat. Add the onion, carrots and celery. Cook for 5 minutes until the veggies begin to wilt. Add the garlic and cook for 1 minute longer. Add flour: Sprinkle the flour over the veggies and cook for a minute, stirring constantly. Pour in the milk and broth: Add the evaporated milk and broth. Stir quickly to combine. Simmer & make the dumplings: Bring the soup to a boil, then reduce to a simmer and make your drop dumplings as described above. Drop the dumplings into the soup: Using a large cookie scoop, scoop the dumpling dough into balls and drop them directly into the simmering soup. Place them around the edges of the pot, not all in the center. Gently press the dumplings down so the soup runs over them. Cover and simmer: Place a lid on your pot, reduce heat to a low simmer and cook for 15 minutes. Test the dumplings: Gently stir the soup. Remove one dumpling and cut it in half to make sure it is cooked through. Serve: Once the dumplings are cooked, your soup is ready to eat. Time to dig in!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        user_id: 4,
        title: 'Spaghetti',
        image_urls:
          'https://www.olivetomato.com/wp-content/uploads/2022/06/Greek-Spaghetti-with-Ground-Beef-Sauce-recipe-%E2%80%93-Makaronia-me-Kima-2.jpeg',
        cook_temperature: 'med',
        cook_time: '30 minutes',
        prep_time: '10 minutes',
        cook_instructions:
          'Start by making the sauce. In a medium size pot, add about ⅓-½ cup extra virgin olive oil, at medium heat and once the oil starts to shimmer, add the onion, cloves, allspice, cinnamon stick, bay leaves and a pinch of salt. Sauté until translucent. Add the garlic halves and sauté 1 more minute. Add the tomato paste and swirl with a wooden spoon, heating well. Add the ground beef, pressing it with a fork and heat until, it is crumbly and no longer red. Add the wine and cook until evaporated. Add the crushed tomatoes, 1 tsp fine sea salt. ½ tsp black pepper, 1 tsp sugar and 1 cup hot water, stir well. Lower heat and simmer for about an hour, checking water levels and adding a bit of hot water as needed. Once ready, remove from heat, remove cinnamon stick, bay leaves and set aside. Boil pasta according to directions. Once pasta is ready, strain and add 1 tbsp olive oil and stir. In a large casserole dish spread half the pasta, sprinkle over the pasta 2 tbsp grated cheese, place a second layer of pasta and sprinkle 2 more tbsp of grated cheese. Sprinkle over some ground cinnamon. Set aside. In a little pan, heat 2 tbsp of olive oil until it starts to shimmer. Remove from heat and drizzle over pasta.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        user_id: 5,
        title: 'Homemade Pepperoni Pizza',
        image_urls: 'https://bakeitwithlove.com/wp-content/uploads/2022/02/tortilla-pizza-sq.jpg',
        cook_temperature: 'High',
        cook_time: '50 minutes',
        prep_time: '15 minutes',
        cook_instructions:
          'Preheat oven to 500°F. If you are using a pizza stone, preheat it in the oven for at least 20 minutes so it is nice and hot as well. If you are using my sauce recipe, stir together the ingredients. The sauce recipe makes just enough for one large pizza. You can easily double it if you are making more than one pizza. Roll out dough on a lightly floured surface. If its hard to roll, let it rest for 5 minutes so it can come to room temperature. For a large pizza, I like to roll my dough into about a 14-inch diameter circle.Transfer the dough to a lightly dusted pizza peel. Alternatively, fit it into a large cast-iron. Add sauce in a light layer all over the pizza. Top the pizza with grated cheese and the rest of the pepperoni. Season with black pepper.  Place the skillet over a high heat burner for 2 minutes to get it preheated and get the crust cooking right away. Then transfer to a 500 ̊F oven and bake for 10 to 12 minutes, or until the crust is golden brown. Season with fresh oregano (optional). Serve while warm with a side salad.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 16,
        user_id: 13,
        title: 'Ratatouille',
        image_urls: 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg',
        cook_temperature: 'High',
        cook_time: '1 hour 10 minutes ',
        prep_time: '20 minutes',
        cook_instructions:
          'Preheat the oven to 375F. In a large nonstick pan, heat 2 tablespoons of olive oil over medium high heat. Add in the onion, garlic, and carrot and cook until tender, about 5 minutes. Next, add in the crushed tomatoes and seasonings and simmer for 15 minutes. Taste and adjust the seasoning with salt and pepper. Once the sauce has thickened, pour into a 2 quart baking dish. Arrange the sliced vegetables in a circular pattern standing upright in the dish over the sauce. Brush with the remaining olive oil. Cover and bake for 30 minutes, then uncover and bake until vegetables are tender. Serve immediately.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 17,
        user_id: 13,
        title: 'Seared Scallops with Brown Butter',
        image_urls:
          'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2560%2Cc_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg',
        cook_temperature: 'High',
        cook_time: '50 minutes',
        prep_time: '20 minutes',
        cook_instructions:
          'Cut 2 lemons in half and squeeze juice into a measuring glass or small bowl; you should have 1/4 cup juice. Set aside. Using a paring knife, cut ends off remaining lemon to expose flesh. Upend lemon on a cut end and remove peel and white pith from lemons; discard. Cut between membranes to release segments into bowl with juice; squeeze membranes to get any last drops of juice. Fish out any seeds; set aside. Thinly slice chives and place in a small bowl; set aside. Pull side muscle off scallops, if needed; pat dry. Season lightly on both sides with salt and pepper. Heat a large skillet, preferably stainless steel, over medium-high. Pour in oil to lightly coat surface (2–3 Tbsp.); heat until it shimmers and you see first wisps of smoke. Swiftly place scallops into skillet, flat side down, and cook without touching, tossing, or fussing until underside is deep golden brown, 3–4 minutes. Use a thin spatula or tongs to gently turn over; if they resist, cook another 30 seconds and try again. Cook on second side until flesh at top and bottom looks opaque but there is still a faintly translucent strip in the middle, 1–2 minutes, depending on size. Transfer scallops to a plate. Pour off any oil in skillet and set over medium heat. Add butter and cook, swirling, until butter foams, then browns, about 2 minutes. Add reserved lemon juice and segments; energetically stir and swirl pan to emulsify sauce. Mix in capers and reserved chives and spoon pan sauce around and over scallops.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 18,
        user_id: 13,
        title: 'Cucumber Sandwich',
        image_urls:
          'https://www.eatingwell.com/thmb/vFO43UyAy2NBfjOG6wADLLCE-Kc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cucumber-sandwich-eddcc95811f5426094ea5dbea6a6b026.jpg',
        cook_temperature: 'Cold',
        cook_time: '12 minutes',
        prep_time: '10 minutes',
        cook_instructions:
          'Stir cream cheese, yogurt, chives, dill and pepper together in a small bowl until well blended. Spread the mixture evenly on one side of each bread slice. Top 1 slice with cucumber slices, then top with the other bread slice, cream cheese-side down. Cut the crusts from the sandwich and cut it in half diagonally.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 19,
        user_id: 13,
        title: 'Buddah Bowl',
        image_urls: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/12/plant-based-recipes.jpg',
        cook_temperature: 'High',
        cook_time: '20 minutes',
        prep_time: '15 minutes',
        cook_instructions:
          'Preheat the oven to 400°F and line a large baking sheet with parchment paper. Toss the sweet potatoes with olive oil, salt, and pepper, and spread onto the baking sheet. Roast for 20 minutes, or until golden brown. Thinly slice the radish into rounds (this is best done on a mandoline), and use a vegetable peeler to peel the carrots into ribbons. Toss the radish slices, carrots, and shredded cabbage with a squeeze of lemon. Set aside. Place the kale leaves into a large bowl and toss with a squeeze of lemon and a few pinches of salt. Use your hands to massage the leaves until they become soft and wilted and reduce in the bowl by about half. Assemble individual bowls with the brown rice, chickpeas, kale, carrots, radishes, cabbage, sweet potatoes, sauerkraut, sesame seeds, and microgreens, if using. Season with salt and pepper and serve with the Turmeric Tahini Sauce.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 20,
        user_id: 13,
        title: 'Barbequed Corn With Tangy Sour-Cream Dressing',
        image_urls: 'https://cdn.broadsheet.com.au/cache/10/30/1030bc60f9023eddcaf9e4686ada3ff5.jpg',
        cook_temperature: 'Medium',
        cook_time: '15 minutes',
        prep_time: '25 minutes',
        cook_instructions:
          'Preheat a barbeque grill to medium–hot. If you don’t have a grill plate, a flat barbeque plate will also work, or you can use the overhead grill on your oven. Shuck the corn, leaving 5cm or so of the stem to use as a handle. Pour a good glug of olive oil onto a baking tray and roll the corn around in the oil until evenly coated. Lay the corn on the grill and cook for about 15 minutes, turning frequently. While the corn is cooking, combine the dressing ingredients in a small bowl and whisk with a fork to bring them all together. The corn is ready when the kernels are tender and have started to char a little. Once cooked, transfer corn to a serving platter. Spoon the dressing over the corn, scatter the coriander leaves over the top and finish with a little salt and pepper and extra paprika. Serve with lime wedges for squeezing over.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 21,
        user_id: 13,
        title: '15-Minute Chicken & Rice Dinner',
        image_urls: 'https://www.campbells.com/wp-content/uploads/2021/07/15-Minute-Chicken-Rice_card-1106x830.jpg',
        cook_temperature: 'High',
        cook_time: '15 minutes',
        prep_time: '25 minutes',
        cook_instructions:
          'Season the chicken with salt and pepper.  Heat the oil in a 12-inch skillet over medium-high heat.  Add the chicken and cook for 6 minutes or until browned on both sides (to prevent sticking- make sure the skillet and oil are hot before adding the chicken).  Remove the chicken from the skillet. Stir the soup, water and paprika in the skillet and heat to a boil.  Stir in the rice and broccoli.  Reduce the heat to low.  Return the chicken to the skillet.  Sprinkle the chicken with additional paprika.  Cover and cook for 5 minutes or until the chicken is done and the rice is tender.  Season to taste before serving.',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  },
};
