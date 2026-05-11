export const topics = [
  {
    id: 'food-court',
    name: 'Food Court Builder',
    emoji: '🍕',
    accent: '#e63946',
    rounds: [
      {
        category: 'Pizza Place',
        good: ["Domino's", "Pizza Hut", "Papa John's", "Blaze Pizza", "MOD Pizza", "Sbarro", "California Pizza Kitchen"],
        bad: ["Little Caesars", "Cicis Pizza", "Chuck E. Cheese's", "Frozen Totino's"],
      },
      {
        category: 'Burger Spot',
        good: ["Five Guys", "In-N-Out", "Shake Shack", "Whataburger", "Smashburger", "Culver's", "The Habit Burger"],
        bad: ["Burger King", "McDonald's", "Rally's / Checkers", "Steak 'n Shake"],
      },
      {
        category: 'Chicken Spot',
        good: ["Chick-fil-A", "Raising Cane's", "Popeyes", "Zaxby's", "Dave's Hot Chicken", "PDQ", "Slim Chickens"],
        bad: ["Wingstop", "KFC", "Church's Chicken", "Checkers Chicken"],
      },
      {
        category: 'Dessert',
        good: ["Crumbl", "Auntie Anne's", "Cinnabon", "Dairy Queen", "Cold Stone", "Nothing Bundt Cakes", "Jeni's Ice Cream"],
        bad: ["Krispy Kreme (drive-thru only)", "Vending machine candy", "Gas station ice cream", "Grocery store bakery cookies"],
      },
    ],
  },
  {
    id: 'dream-vacation',
    name: 'Dream Vacation',
    emoji: '✈️',
    accent: '#457b9d',
    rounds: [
      {
        category: 'Destination',
        good: ["Paris", "Tokyo", "Bali", "Santorini", "Machu Picchu", "Kyoto", "Amalfi Coast"],
        bad: ["Newark, NJ", "Gary, Indiana", "Fresno in July", "Airport hotel parking lot"],
      },
      {
        category: 'Accommodation',
        good: ["Overwater Bungalow", "Castle", "Treehouse", "Beach Villa", "Boutique Hotel", "Ryokan", "Clifftop Resort"],
        bad: ["Airport motel", "Hostel bunk above a snorer", "Airbnb that looks nothing like the photos", "Roadside Motel 6"],
      },
      {
        category: 'Activity',
        good: ["Scuba Diving", "Hot Air Balloon", "Food Tour", "Museum Crawl", "Surfing", "Sunset Sailing", "Hiking"],
        bad: ["Hotel buffet at 7am", "6-hour layover with no lounge access", "Tour bus with 80 strangers", "Getting lost with no data"],
      },
      {
        category: 'Cuisine',
        good: ["French", "Japanese", "Italian", "Mexican", "Thai", "Indian", "Peruvian"],
        bad: ["McDonald's (abroad)", "Hotel continental breakfast", "Airplane food", "The one place still open at midnight"],
      },
    ],
  },
  {
    id: 'music-festival',
    name: 'Music Festival',
    emoji: '🎸',
    accent: '#6a0572',
    rounds: [
      {
        category: 'Headliner',
        good: ["Taylor Swift", "Kendrick Lamar", "Beyoncé", "The Weeknd", "Bad Bunny", "Billie Eilish", "Frank Ocean"],
        bad: ["Guy who peaked in 2009", "Your coworker's cover band", "A DJ playing exclusively Nickelback", "The warm-up act that went way too long"],
      },
      {
        category: 'Opener',
        good: ["Olivia Rodrigo", "Post Malone", "Doja Cat", "Tyler the Creator", "SZA", "Arctic Monkeys", "Zach Bryan"],
        bad: ["Local open mic winner", "The artist everyone Shazam'd then left", "45 minutes of spoken word poetry", "The merch guy who grabbed the mic"],
      },
      {
        category: 'DJ Set',
        good: ["Calvin Harris", "Diplo", "Fred Again", "Fisher", "John Summit", "Skrillex", "Kaytranada"],
        bad: ["Spotify shuffle on someone's phone", "Three songs then technical difficulties", "Playlist from 2014 nobody asked for", "The festival IT guy filling in"],
      },
      {
        category: 'Stage Vibe',
        good: ["R&B Lounge", "Hip-Hop Cypher", "Indie Garden", "Electronic Main Stage", "Jazz Tent", "Country Barn", "Afrobeats Dance Floor"],
        bad: ["The stage next to the porta-potties", "The tent that collapsed in the rain", "Broken sound system stage", "The stage nobody told you about until after"],
      },
    ],
  },
  {
    id: 'movie-night',
    name: 'Movie Night',
    emoji: '🎬',
    accent: '#f4a261',
    rounds: [
      {
        category: 'Genre',
        good: ["Psychological Thriller", "Sci-Fi", "Action", "Animation", "Dark Comedy", "Historical Drama", "Crime Mystery"],
        bad: ["Rom-Com you've already seen 12 times", "Horror sequel nobody asked for", "3-hour indie film with no plot", "Documentary your friend keeps pausing to explain"],
      },
      {
        category: 'Decade',
        good: ["90s", "2000s", "2010s", "2020s", "80s", "70s New Hollywood", "Classic 60s"],
        bad: ["That weird early-2000s era of CGI", "Anything filmed vertically", "Direct-to-DVD era", "Made-for-TV movie era"],
      },
      {
        category: 'Platform',
        good: ["Netflix", "HBO Max", "Disney+", "Apple TV+", "Prime Video", "A24 on demand", "Criterion Channel"],
        bad: ["Free Tubi with ads every 4 minutes", "Someone's ex's Hulu login that stopped working", "DVD from Redbox that skips at the climax", "Streaming on a phone propped on a cup"],
      },
      {
        category: 'Snack',
        good: ["Popcorn", "Nachos", "Loaded Fries", "Charcuterie Board", "Wings", "Pizza", "Cookie dough bites"],
        bad: ["Stale pretzels from the back of the pantry", "Chips someone opens during the quietest scene", "Ice cream that melted in the car", "Popcorn someone burnt in the microwave"],
      },
    ],
  },
  {
    id: 'wrestling-show',
    name: 'Wrestling Show',
    emoji: '🤼',
    accent: '#d62828',
    rounds: [
      {
        category: 'Main Event',
        good: ["Stone Cold vs The Rock", "Undertaker vs HBK", "Cody Rhodes vs Roman Reigns", "CM Punk vs MJF", "Triple H vs Batista", "Randy Orton vs John Cena", "Sasha Banks vs Bianca Belair"],
        bad: ["Two guys you've never heard of", "A match that ends in double DQ", "40-minute promo with no match", "A title change literally nobody wanted"],
      },
      {
        category: 'Entrance Theme',
        good: ["Undertaker's Gong", "Stone Cold's Glass Shatter", "The Rock's IF YA SMELL", "CM Punk's Cult of Personality", "DX's Are You Ready?", "Seth Rollins' Visionary", "Becky Lynch's Celtic Invasion"],
        bad: ["Generic stock music", "A theme that just repeats their name", "The crowd booing before the music hits", "Silence while the PA system resets"],
      },
      {
        category: 'Finishing Move',
        good: ["RKO Outta Nowhere", "Stone Cold Stunner", "Tombstone Piledriver", "Sweet Chin Music", "Go to Sleep", "Spear", "Styles Clash"],
        bad: ["A slow roll-up out of nowhere", "Match ending on a technicality DQ", "The accidental 'I fell on you' pin", "Ref stoppage from a questionable fake injury"],
      },
      {
        category: 'Crowd Moment',
        good: ["Table spot through the announce desk", "Shocking return from injury", "Championship cash-in out of nowhere", "Standing ovation promo", "Surprise WrestleMania appearance", "Crowd chant takeover", "This is Awesome moment"],
        bad: ["Crowd on their phones the whole time", "'Boring' chant breaks out mid-match", "Half the arena leaves early", "The mic cuts out during the big promo"],
      },
    ],
  },
  {
    id: 'cookout',
    name: 'Cookout Experience',
    emoji: '🔥',
    accent: '#e76f51',
    rounds: [
      {
        category: 'Protein',
        good: ["Baby Back Ribs", "Smoked Brisket", "Chicken Wings", "Pulled Pork", "Grilled Salmon", "Tri-Tip", "Jerk Chicken"],
        bad: ["Hot dogs that split in half on the grill", "Dry hamburger nobody flipped in time", "Veggie burgers nobody requested", "The piece that fell through the grate"],
      },
      {
        category: 'Side Dish',
        good: ["Mac & Cheese", "Potato Salad", "Baked Beans", "Corn on the Cob", "Elote", "Pasta Salad", "Coleslaw"],
        bad: ["Lukewarm store-bought potato salad", "Chips that blew away in the wind", "Plain white rice", "The dish that sat in the sun all afternoon"],
      },
      {
        category: 'Drink',
        good: ["Sweet Tea", "Lemonade", "Watermelon Agua Fresca", "Arnold Palmer", "Craft Beer", "Frozen Margarita", "Fruit Punch"],
        bad: ["Warm bottled water", "Flat soda from a day-old 2-liter", "Mysterious punch nobody can identify", "The drink nobody touched all day"],
      },
      {
        category: 'Dessert',
        good: ["Banana Pudding", "Peach Cobbler", "S'mores", "Ice Cream Sandwiches", "Pound Cake", "Strawberry Shortcake", "Watermelon"],
        bad: ["Melted popsicle from the bottom of the cooler", "Dollar section store-bought cookies", "The cake someone accidentally sat on", "Fruit salad with zero seasoning"],
      },
    ],
  },
  {
    id: 'meal',
    name: 'Dream Meal',
    emoji: '🍽️',
    accent: '#2a9d8f',
    rounds: [
      {
        category: 'Cuisine',
        good: ["Italian", "Japanese", "Mexican", "Indian", "French", "Ethiopian", "Peruvian"],
        bad: ["Whatever was left in the fridge", "Gas station sushi", "The one restaurant everyone said was 'fine'", "Leftovers from three days ago"],
      },
      {
        category: 'Main Course',
        good: ["Wagyu Steak", "Lobster Pasta", "Birria Tacos", "Butter Chicken", "Duck Confit", "Injera Platter", "Black Truffle Risotto"],
        bad: ["The plain chicken everyone orders when they can't decide", "Overcooked salmon", "A salad that's just lettuce", "The dish that was 86'd before you ordered"],
      },
      {
        category: 'Drink Pairing',
        good: ["Red Wine", "White Wine", "Craft Beer", "Sake", "Mezcal Cocktail", "Natural Wine", "Sommelier's pick"],
        bad: ["Tap water with no ice", "Diet Coke that tastes slightly off", "The bottle that arrived corked", "House wine that's a mystery varietal"],
      },
      {
        category: 'Dessert',
        good: ["Tiramisu", "Mochi Ice Cream", "Churros con Chocolate", "Gulab Jamun", "Crème Brûlée", "Baklava", "Lava Cake"],
        bad: ["The sad fruit cup", "Artificial cheesecake from a chain", "A cookie that was clearly frozen", "Dessert that arrives after you asked for the check"],
      },
    ],
  },
  {
    id: 'book',
    name: 'Dream Book',
    emoji: '📚',
    accent: '#5c4033',
    rounds: [
      {
        category: 'Genre',
        good: ["Psychological Thriller", "Epic Fantasy", "Literary Fiction", "Sci-Fi", "Historical Fiction", "Gothic Horror", "Magical Realism"],
        bad: ["Someone's unedited diary published as memoir", "A sequel that requires 4 unread prequels", "300 pages of dense academic footnotes", "Self-help book that's just common sense repeated 200 times"],
      },
      {
        category: 'Setting',
        good: ["Victorian London", "Deep Space", "Post-Apocalyptic Earth", "Medieval Kingdom", "Modern Tokyo", "Ancient Rome", "Parallel Universe"],
        bad: ["A generic American suburb with nothing interesting", "A setting so vague it could be anywhere", "An office building with no windows", "The inside of a very boring person's mind"],
      },
      {
        category: 'Protagonist',
        good: ["Disgraced Detective", "Reluctant Wizard", "Double Agent Spy", "Time Traveler", "Rebel Princess", "Unreliable Narrator", "Antihero with a code"],
        bad: ["A character with literally zero flaws", "The Chosen One with no personality", "Someone who solves everything by accident", "A protagonist you're actively rooting against"],
      },
      {
        category: 'Plot Twist',
        good: ["Secret identity revealed", "Time loop discovered", "The villain was morally right", "Narrator is the killer", "The prophecy was a lie", "Everyone's been dead the whole time", "The mentor was the antagonist"],
        bad: ["It was all a dream", "They woke up and everything was fine", "A random new character explains everything", "The twist that makes the whole book pointless"],
      },
    ],
  },
  {
    id: 'shopping-mall',
    name: 'Shopping Mall',
    emoji: '🛍️',
    accent: '#e91e8c',
    rounds: [
      {
        category: 'Anchor Store',
        good: ["Nordstrom", "Apple Store", "Nike", "Zara", "Lululemon", "Sephora", "Uniqlo"],
        bad: ["Store that's been 'going out of business' for 3 years", "The one with the aggressive perfume sprayer at the entrance", "H&M with fitting rooms that have no locks", "Macy's that's just one giant sale sign"],
      },
      {
        category: 'Food Court Pick',
        good: ["Auntie Anne's", "Chick-fil-A", "Cinnabon", "Panda Express", "Shake Shack", "Five Guys", "Jamba Juice"],
        bad: ["Subway that ran out of bread", "The mystery Chinese place with no line ever", "Hot dog cart with no condiments", "Whatever's left at 8:45pm"],
      },
      {
        category: 'Hidden Gem',
        good: ["Vintage Clothing Shop", "Record Store", "Sneaker Consignment", "Board Game Café", "Local Candle Boutique", "Used Book Store", "Art Supply Shop"],
        bad: ["Cell phone case kiosk that follows you down the hall", "Guy selling sunglasses in the middle of the walkway", "Store selling only one thing you'll never need", "Kiosk offering a 'free gift' with a suspicious catch"],
      },
      {
        category: 'Activity',
        good: ["Movie Theater", "Arcade", "Ice Skating Rink", "Mini Golf", "Photo Booth Marathon", "Trampoline Park", "Escape Room"],
        bad: ["Sitting on a bench near the food court", "Watching people get their picture taken with Santa", "Walking up the broken escalator", "Waiting outside a store while someone tries on 12 things"],
      },
    ],
  },
  {
    id: 'sports-game',
    name: 'Sports Game',
    emoji: '🏟️',
    accent: '#1d3461',
    rounds: [
      {
        category: 'Sport',
        good: ["NFL Football", "NBA Basketball", "MLB Baseball", "NHL Hockey", "MLS Soccer", "College Football", "Tennis Grand Slam"],
        bad: ["Minor league game on a Tuesday in October", "A preseason game that means nothing", "A league you've genuinely never heard of", "A game decided in the first 10 minutes"],
      },
      {
        category: 'Seat Location',
        good: ["Field-level / Courtside", "Club Seats", "Luxury Suite", "Behind Home Plate", "End Zone", "Premium Lower Bowl", "Press Box Tour"],
        bad: ["Obstructed view behind a pillar", "Right next to the loudest person in the stadium", "Upper deck with the sun directly in your eyes", "Standing room only at the very back"],
      },
      {
        category: 'Stadium Food',
        good: ["Nachos", "Loaded Fries", "Giant Pretzel", "Chicken Tenders", "Gourmet Hot Dog", "Craft Beer", "Garlic Fries"],
        bad: ["$18 flat fountain soda", "Hot dog rotating since 11am", "Stale bag popcorn", "Water bottle they made you remove the cap from"],
      },
      {
        category: 'Game Moment',
        good: ["Walk-off win", "Buzzer beater", "Last-minute comeback", "Historic record broken", "Overtime thriller", "Perfect game / shutout", "Championship-clinching moment"],
        bad: ["Home team loses by 40", "Rain delay that lasted 3 hours", "Game decided by a penalty nobody understood", "Entire crowd leaves before the final buzzer"],
      },
    ],
  },
  {
    id: 'snack-board',
    name: 'Snack Board',
    emoji: '🧀',
    accent: '#b5835a',
    rounds: [
      {
        category: 'Cheese',
        good: ["Brie", "Aged Cheddar", "Gouda", "Manchego", "Burrata", "Comté", "Époisses"],
        bad: ["Pre-sliced American singles", "The mystery cheese nobody touched all night", "Grocery store mozzarella sticks", "Cheese left out way too long"],
      },
      {
        category: 'Meat',
        good: ["Prosciutto", "Salami", "Soppressata", "Bresaola", "Chorizo", "Nduja", "Coppa"],
        bad: ["Lunchables-tier ham slices", "The meat nobody could identify", "Gas station beef jerky", "The one that's been sweating on the board all night"],
      },
      {
        category: 'Cracker / Bread',
        good: ["Fig & Olive Crackers", "Sourdough Crostini", "Rosemary Flatbread", "Pretzel Thins", "Water Crackers", "Pita Chips", "Seeded Crisps"],
        bad: ["Plain saltines", "Gluten-free cracker that crumbles immediately", "Stale Triscuits from the back of the pantry", "Cracker so dry it needs two glasses of water"],
      },
      {
        category: 'Accompaniment',
        good: ["Honey", "Fig Jam", "Marcona Almonds", "Truffle Honey", "Candied Walnuts", "Hot Pepper Jelly", "Cornichons"],
        bad: ["French's yellow mustard", "Ketchup", "Jam that's been open for six months", "A single sad grape"],
      },
    ],
  },
  {
    id: 'bento-box',
    name: 'Bento Box',
    emoji: '🍱',
    accent: '#264653',
    rounds: [
      {
        category: 'Protein',
        good: ["Teriyaki Chicken", "Salmon Sashimi", "Tonkatsu", "Karaage", "Spicy Tuna Roll", "Miso-Glazed Black Cod", "Gyoza"],
        bad: ["Sad plain tofu with no seasoning", "Overcooked rubbery shrimp", "Whatever was left from yesterday", "A single piece of imitation crab"],
      },
      {
        category: 'Rice / Grain',
        good: ["Steamed White Rice", "Sushi Rice", "Fried Rice", "Sesame Noodles", "Udon", "Brown Rice with Furikake", "Onigiri"],
        bad: ["Undercooked rice that's still crunchy", "Cold plain rice with no seasoning", "Soggy noodles that absorbed all the sauce", "Instant ramen noodles nobody seasoned"],
      },
      {
        category: 'Side',
        good: ["Edamame", "Tamagoyaki", "Seaweed Salad", "Cucumber Sunomono", "Pickled Vegetables", "Agedashi Tofu", "Takoyaki"],
        bad: ["A single piece of wilted lettuce", "Plain cucumber slices with no dressing", "The side that arrived cold somehow", "Mushy overcooked broccoli"],
      },
      {
        category: 'Treat',
        good: ["Mochi Ice Cream", "Matcha Pocky", "Dorayaki", "Green Tea Kit Kat", "Taiyaki", "Strawberry Daifuku", "Anmitsu"],
        bad: ["Fortune cookie from a different restaurant", "Rock-hard candy from the bottom of the bag", "A single plain rice cracker", "Expired Pocky"],
      },
    ],
  },
];
