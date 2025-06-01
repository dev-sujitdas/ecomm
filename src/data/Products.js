const initialProducts = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewellery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewellery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewellery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewellery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 130
    }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  },

  {
    "id": 22,
    "title": "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    "price": 89.99,
    "description": "Pressure cook, slow cook, rice cooker, steamer, sauté, yogurt maker and warmer.",
    "category": "electronics",
    "image": "https://media.istockphoto.com/id/2022477966/photo/multi-cooker-pressure-cooker-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=UWHIbYT-nrx58nL4KoDYbKNwksMV6oanmxF4DknuC8M=",
    "rating": {
      "rate": 4.6,
      "count": 2235
    }
  },
  
  {
    "id": 29,
    "title": "Fitbit Charge 5 Fitness Tracker",
    "price": 149.95,
    "description": "Advanced health & fitness tracker with built-in GPS, stress management, and sleep tracking.",
    "category": "electronics",
    "image": "https://media.istockphoto.com/id/1345812741/photo/white-fitness-tracker.jpg?s=612x612&w=0&k=20&c=JrVEAtnY50pnVtUN_gG4hEExZlOP606kQ7XWTEItzkM=",
    "rating": {
      "rate": 4.1,
      "count": 1330
    }
  },
  {
    "id": 30,
    "title": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner",
    "price": 399.99,
    "description": "Powerful cordless vacuum with deep clean capabilities for carpets and hard floors.",
    "category": "electronics",
    "image": "https://media.istockphoto.com/id/927031764/photo/vacuum-cleaner-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=p2WFCCgubSVDs3a3VhEkpWM9ZrqbncKvHtT4J7aaM9U=",
    "rating": {
      "rate": 4.6,
      "count": 870
    }
  },
  {
    "id": 31,
    "title": "Sterling Silver Infinity Bracelet",
    "price": 29.99,
    "description": "Elegant silver bracelet with infinity symbol and adjustable clasp.",
    "category": "jewellery",
    "image": "https://media.istockphoto.com/id/1193011143/photo/jewelry-diamond-bracelet.jpg?s=612x612&w=0&k=20&c=iqEfbCl9S646xB577QtYY5oHUkLBOP4woEx1x2RiKXY=",
    "rating": {
      "rate": 4.5,
      "count": 240
    }
  },
  {
    "id": 32,
    "title": "Gold Plated Dangle Earrings",
    "price": 19.99,
    "description": "Classic gold-plated earrings perfect for evening wear.",
    "category": "jewellery",
    "image": "https://media.istockphoto.com/id/90366433/photo/long-earrings.jpg?s=612x612&w=0&k=20&c=8D7v5mHXHM5dIJ9JpvnCy2fSL-e5F7dqX-J7NysgMQE=",
    "rating": {
      "rate": 4.3,
      "count": 320
    }
  },
  {
    "id": 33,
    "title": "Diamond Stud Earrings",
    "price": 299.99,
    "description": "Timeless diamond studs in a classic four-prong setting.",
    "category": "jewellery",
    "image": "https://media.istockphoto.com/id/1289163992/photo/flowers-earrings-isolated.jpg?s=612x612&w=0&k=20&c=7HMQijV5SoKh5zd8l2Dc4qKMBJ9BkQA4QQ_Ln4cCDuU=",
    "rating": {
      "rate": 4.9,
      "count": 180
    }
  },
  {
    "id": 34,
    "title": "Gold Necklace Set",
    "price": 89.95,
    "description": "Elegant freshwater gold necklace with matching earrings.",
    "category": "jewellery",
    "image": "https://media.istockphoto.com/id/170219462/photo/wedding-gold-jewelry-for-indian-bride.jpg?s=612x612&w=0&k=20&c=4t8E-Z8vJejLGRGo6_2DYraPetDfCuIaGy6mymp8EKI=",
    "rating": {
      "rate": 4.7,
      "count": 210
    }
  },
  {
    "id": 35,
    "title": "Cubic Zirconia Tennis Bracelet",
    "price": 49.95,
    "description": "Sparkling CZ bracelet with box clasp, silver tone finish.",
    "category": "jewellery",
    "image": "https://images.unsplash.com/photo-1586104195538-050b9f74f58e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJpbmd8ZW58MHx8MHx8fDA%3D",
    "rating": {
      "rate": 4.4,
      "count": 170
    }
  },
  {
    "id": 36,
    "title": "Minimalist Gold Stacking Rings Set",
    "price": 24.99,
    "description": "Set of 5 thin, gold-tone rings in multiple sizes.",
    "category": "jewellery",
    "image": "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "rating": {
      "rate": 4.2,
      "count": 310
    }
  },
  {
    "id": 37,
    "title": "Vintage Crystal Brooch",
    "price": 15.95,
    "description": "Victorian-style brooch with floral crystal pattern.",
    "category": "jewellery",
    "image": "https://media.istockphoto.com/id/698218624/photo/crystal-brooch-on-white.jpg?s=612x612&w=0&k=20&c=A2ntwnlJ6jpKK02AdfmgV4jZw9urkbSY5nUTakKU3f8=",
    "rating": {
      "rate": 4.6,
      "count": 145
    }
  },
  {
    "id": 38,
    "title": "Men’s Black Tungsten Ring",
    "price": 39.99,
    "description": "Durable and stylish tungsten carbide wedding band.",
    "category": "jewellery",
    "image": "https://media.istockphoto.com/id/1094378124/photo/fashion-male-ring-isolation-white-background.jpg?s=612x612&w=0&k=20&c=_J9_-m1H4SBLWyc4WqWzbd0J3WNSvbPCFCRKPi1z9HI=",
    "rating": {
      "rate": 4.8,
      "count": 250
    }
  },
  {
    "id": 39,
    "title": "White Gold Engagement Ring",
    "price": 35.99,
    "description": "White gold engagement ring with diamonds",
    "category": "jewellery", 
    "image": "https://media.istockphoto.com/id/1158063724/photo/white-gold-engagement-ring-with-diamonds-isolated-on-a-white-background-photo-was-taken-using.jpg?s=612x612&w=0&k=20&c=R4TOEgp5SUp6enlcZz-GePK3emJ0h20ljU366vEaaKg=",
    "rating": {
      "rate": 4.7,
      "count": 190
    }
  },
  {
    "id": 40,
    "title": "White Gold Ring",
    "price": 18.99,
    "description": "White gold ring fow women.",
    "category": "jewellery",
    "image": "https://media.istockphoto.com/id/473815384/photo/white-gold-ring.jpg?s=612x612&w=0&k=20&c=U-Fc33NRAQ9pVSJCWL-g5Tcq8A-EYdBDud9CMaJW_OA=",
    "rating": {
      "rate": 4.3,
      "count": 130
    }
  }
]


export default initialProducts