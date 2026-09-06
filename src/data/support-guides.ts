export type SupportGuide = {
  slug: string;
  category: 'moving' | 'travel' | 'hosting' | 'holiday' | 'wedding' | 'family' | 'creator';
  title: string;
  description: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  relatedDownload: string;
  relatedLabel: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  checklist: string[];
  mistakes: string[];
  faqs: { q: string; a: string }[];
};

export const supportGuides: SupportGuide[] = [
  {
    slug: 'moving-checklist-8-weeks',
    category: 'moving',
    title: '8-Week Moving Checklist | What to Do Before Moving Day',
    description: 'A practical 8-week moving checklist with a week-by-week timeline for decluttering, packing, utilities, address changes, cleaning and move-day prep.',
    h1: 'An 8-week moving checklist that keeps the last week from becoming chaos.',
    intro: 'The easiest move is the one where administrative tasks, packing and cleaning do not all land in the same three days. This timeline works backward from moving day and separates decisions you can make early from tasks that truly need to wait.',
    quickAnswer: 'Start with decisions and paperwork 6–8 weeks out, pack low-use rooms 3–5 weeks out, confirm services and address changes 1–2 weeks out, then protect the final 48 hours for essentials, cleaning and actual moving.',
    relatedDownload: 'moving-planner-printable',
    relatedLabel: 'Moving Planner Printable',
    sections: [
      { heading: '6–8 weeks before: reduce what you are moving', body: 'Before buying boxes, decide what is worth transporting. Moving is one of the few times every object has to justify the effort of packing, carrying and finding a new home.', bullets: ['Walk room by room and mark donate, sell, recycle and keep', 'Measure large furniture against the new space', 'Create one moving folder for quotes, receipts and confirmations', 'Reserve movers, truck or helpers if your date is fixed', 'Start using frozen and pantry food you do not want to move'] },
      { heading: '3–5 weeks before: pack by frequency of use', body: 'Pack the things you use least first rather than packing an entire room just because it is convenient. Seasonal clothing, books, decor, guest-room items and extra kitchenware can usually go early without affecting daily life.', bullets: ['Label every box with room and short contents', 'Keep hardware from disassembled furniture in labeled bags', 'Photograph cable setups before unplugging electronics', 'Create a running list of boxes that contain valuables or fragile items'] },
      { heading: '1–2 weeks before: handle the admin work', body: 'This is when service transfers and address updates become real. Put confirmation numbers and activation dates in one place so you are not searching email on moving day.', bullets: ['Electric, gas and water transfer dates', 'Internet installation or transfer', 'USPS mail forwarding', 'Insurance address change', 'Bank, employer, subscriptions and delivery accounts', 'Medication refills and pet records if needed'] },
      { heading: 'Final 48 hours: stop packing normal life', body: 'The last two days should be about moving, not searching for toothpaste, chargers or clean clothes. Pack a first-night bag for each person and one clearly marked household essentials box.' }
    ],
    checklist: ['First-night clothing and toiletries', 'Chargers and basic electronics', 'Medications', 'Paper towels, trash bags and cleaning spray', 'Coffee or breakfast basics', 'Basic tools and scissors', 'Important documents', 'Keys, wallet and moving paperwork'],
    mistakes: ['Packing every frequently used item too early', 'Leaving utilities and internet until moving day', 'Using vague box labels like “misc.”', 'Filling large boxes with heavy books', 'Forgetting to reserve cleaning time at the old home'],
    faqs: [
      { q: 'When should I start packing for a move?', a: 'For most homes, start low-use items about 3–5 weeks before the move and leave everyday essentials until the final week.' },
      { q: 'What should I do first when preparing to move?', a: 'Start by decluttering, confirming the move date, reserving transportation or help and creating one place for all moving paperwork.' },
      { q: 'What should not go in the moving truck?', a: 'Keep identification, medication, valuables, important documents, keys and anything you will need immediately with you.' }
    ]
  },
  {
    slug: 'how-to-label-moving-boxes',
    category: 'moving',
    title: 'How to Label Moving Boxes | Simple Room + Priority System',
    description: 'A simple moving box labeling system using room, contents and priority so boxes are easier to load, unload and unpack without over-organizing.',
    h1: 'How to label moving boxes so you know where they go and which ones to open first.',
    intro: 'A useful label answers three questions in a few seconds: where does this box go, what is roughly inside and how soon do I need it? Anything more elaborate can become harder to maintain than it is worth.',
    quickAnswer: 'Write the destination room, a 3–5 word contents summary and a priority such as OPEN FIRST, NORMAL or STORAGE on the top and at least one side of every box.',
    relatedDownload: 'moving-planner-printable',
    relatedLabel: 'Moving Planner Printable',
    sections: [
      { heading: 'Use a three-part label', body: 'Keep the system readable from across a room. A label like “KITCHEN — pots + pans — NORMAL” is more useful than a box number with no context.', bullets: ['Destination room', 'Short contents description', 'Priority level'] },
      { heading: 'Label the top and one side', body: 'Top-only labels disappear as soon as boxes are stacked. Put the same room name on one side so movers or friends can route boxes without rearranging the pile.' },
      { heading: 'Use OPEN FIRST sparingly', body: 'If half the boxes are marked urgent, none of them are. Reserve the label for things you are likely to need in the first 24 hours: bedding, coffee gear, basic cookware, bathroom supplies, baby items or work equipment.' },
      { heading: 'Add box numbers only when they solve a real problem', body: 'Numbering is helpful for long-distance moves, storage units or detailed inventories. For a short local move, room + contents + priority is often faster and perfectly adequate.' }
    ],
    checklist: ['Room name in large letters', 'Short contents summary', 'Priority mark', 'Fragile note when relevant', 'Top label', 'Side label'],
    mistakes: ['Writing only the room name', 'Putting labels on just the top', 'Using color alone with no text', 'Making every box high priority', 'Writing a full inventory on the cardboard instead of keeping it brief'],
    faqs: [
      { q: 'What is the best way to label boxes for moving?', a: 'Use the destination room, a brief contents description and a priority level on the top and at least one side.' },
      { q: 'Should I number moving boxes?', a: 'Numbering can help with detailed inventories or long-distance moves, but it is optional for simpler local moves.' },
      { q: 'Should I use colored tape for each room?', a: 'It can help visually, but still write the room name because colors are easy to forget and can be hard to distinguish.' }
    ]
  },
  {
    slug: 'group-trip-budget-split',
    category: 'travel',
    title: 'How to Split Group Trip Costs | Simple Shared Expense Method',
    description: 'A practical method for splitting group trip expenses, deciding what is shared, tracking who paid and settling costs without turning the trip into accounting.',
    h1: 'How to split group trip costs without making every dinner a math problem.',
    intro: 'Group travel gets awkward when nobody agrees on what is shared, one person fronts large reservations and small purchases get mixed together. The fix is less about perfect math and more about deciding the rules before money starts moving.',
    quickAnswer: 'Separate expenses into shared-fixed, shared-variable and individual. Assign one person to record shared costs, note who paid, then settle once or twice rather than sending reimbursements after every purchase.',
    relatedDownload: 'group-trip-planner-printable',
    relatedLabel: 'Group Trip Planner Printable',
    sections: [
      { heading: 'Decide what counts as shared before the trip', body: 'Lodging and a rental car are usually easy. Groceries, alcohol, parking, ride shares and restaurant bills are where expectations diverge. Agree on the categories that will be pooled before anyone starts paying.', bullets: ['Shared fixed: lodging, rental car, house fees', 'Shared variable: groceries, gas, parking, rides', 'Individual: flights, personal shopping, optional activities'] },
      { heading: 'Use one running expense log', body: 'For every shared expense, record the date, item, total, payer and who should be included in the split. That is enough information to reconcile later without saving every receipt.' },
      { heading: 'Do not force equal splits when participation is not equal', body: 'If two people skip an expensive excursion or one traveler arrives a day late, exclude them from that specific cost. Equal splitting is simple only when the benefit is actually shared equally.' },
      { heading: 'Settle in batches', body: 'One mid-trip settlement and one final settlement is usually easier than constant payment requests. The goal is to keep balances from becoming huge while leaving the trip feeling like a trip.' }
    ],
    checklist: ['Agree on shared categories', 'Choose the expense recorder', 'Record who paid', 'Record who participated', 'Keep a running total', 'Settle once mid-trip if needed', 'Do a final reconciliation before everyone forgets'],
    mistakes: ['Splitting optional activities across everyone', 'Assuming groceries and alcohol are automatically shared', 'Waiting weeks after the trip to reconcile', 'Tracking tiny personal purchases that were never meant to be shared', 'Having multiple unofficial versions of the expense list'],
    faqs: [
      { q: 'What is the easiest way to split group vacation costs?', a: 'Agree on shared categories, use one shared expense log and settle in batches instead of reimbursing every transaction.' },
      { q: 'Should group trip costs always be split equally?', a: 'No. Equal splits work for costs everyone uses equally; optional activities and partial participation should be split only among participants.' },
      { q: 'Who should pay for the Airbnb on a group trip?', a: 'One person can book and pay, but the group should agree on each traveler’s share and reimbursement timing before the reservation is made.' }
    ]
  },
  {
    slug: 'group-trip-itinerary-planning',
    category: 'travel',
    title: 'How to Plan a Group Trip Itinerary | Flexible Schedule Template',
    description: 'Build a group trip itinerary that balances reservations, travel time and free time using anchor plans, optional blocks and clear meeting details.',
    h1: 'How to plan a group trip itinerary people will actually want to follow.',
    intro: 'The worst group itinerary is either completely empty or scheduled down to the minute. A better plan uses a few fixed anchors, leaves breathing room and makes it obvious where people need to be when something is truly time-sensitive.',
    quickAnswer: 'Build each day around one or two anchor plans, add realistic travel and reset time, then keep the rest as optional blocks rather than mandatory appointments.',
    relatedDownload: 'group-trip-planner-printable',
    relatedLabel: 'Group Trip Planner Printable',
    sections: [
      { heading: 'Start with the non-negotiable anchors', body: 'Flights, ticketed events, dinner reservations and tours go on the itinerary first. These are the pieces that can create real consequences if the group is late.' },
      { heading: 'Add travel time before adding more activities', body: 'A 2 p.m. reservation is not a 2 p.m. commitment if you need 45 minutes to get there, park and meet the group. Put departure time on the plan, not just arrival time.' },
      { heading: 'Limit most days to two anchor activities', body: 'A morning anchor and an evening anchor often leave enough space for lunch, naps, shopping, weather changes or people splitting up for a few hours.', bullets: ['Morning anchor', 'Flexible midday block', 'Reset or travel time', 'Evening anchor', 'Optional late-night plan'] },
      { heading: 'Put addresses and booking names where people can see them', body: 'The useful itinerary is not just a list of activity names. Include the address, reservation name, confirmation note and any “meet here” detail that prevents a 15-message group chat.' }
    ],
    checklist: ['Arrival and departure details', 'One or two anchor plans per day', 'Departure time for reservations', 'Addresses', 'Reservation names', 'Flexible blocks', 'Bad-weather fallback when relevant'],
    mistakes: ['Scheduling every hour', 'Ignoring travel and parking time', 'Making optional plans look mandatory', 'Leaving reservation details in one person’s email', 'Planning every meal as a group event'],
    faqs: [
      { q: 'How much should you plan on a group trip?', a: 'One or two anchor activities per day is a good starting point, with flexible time around them.' },
      { q: 'What should a group trip itinerary include?', a: 'Include arrival details, fixed reservations, departure times, addresses, confirmation information and flexible or optional blocks.' },
      { q: 'Should every meal be planned on a group vacation?', a: 'Not necessarily. A few group meals can be anchors while breakfasts, lunches or some dinners remain flexible.' }
    ]
  },
  {
    slug: 'dinner-party-timeline',
    category: 'hosting',
    title: 'Dinner Party Timeline | 48 Hours to Guests Arriving',
    description: 'A practical dinner party timeline covering what to prep 48 hours before, the day before, the morning of and in the final hour before guests arrive.',
    h1: 'A dinner party timeline that keeps the final hour for finishing, not starting.',
    intro: 'A calm dinner party is usually won before the guests arrive. The trick is moving every task that can be done early out of the final two hours, leaving only cooking steps that truly need to happen close to serving.',
    quickAnswer: 'Shop and make stable components 24–48 hours ahead, set the table and finish cold prep the morning of, then reserve the final hour for reheating, garnishing, lighting and welcoming guests.',
    relatedDownload: 'dinner-party-planner-printable',
    relatedLabel: 'Dinner Party Planner Printable',
    sections: [
      { heading: '48 hours before', body: 'Finalize the guest count, menu and grocery list. Buy everything except highly perishable items if needed. Make sauces, dressings, desserts or braises that improve after resting.' },
      { heading: 'The day before', body: 'Prep vegetables, marinate proteins, chill drinks, pull out serving dishes and set any table elements that will not get in the way of normal household use.' },
      { heading: 'Morning and afternoon of the party', body: 'Do the work that creates clutter now: chop, wash, assemble cold dishes, clear counters, empty the dishwasher and confirm oven temperatures and cook times.' },
      { heading: 'The final hour', body: 'Avoid any recipe step that requires a new cutting board or major cleanup. Focus on cooking, reheating, garnishing and atmosphere.', bullets: ['T - 60: start final cooking', 'T - 40: set out drinks and water', 'T - 25: warm serving dishes if needed', 'T - 15: light candles, music on, kitchen reset', 'T - 5: pour yourself something and stop cleaning'] }
    ],
    checklist: ['Menu finalized', 'Groceries purchased', 'Serving dishes assigned', 'Drinks chilled', 'Table set', 'Dishwasher empty', 'Trash emptied', 'Final-hour cooking list visible'],
    mistakes: ['Choosing multiple dishes that need the oven at different temperatures', 'Leaving dessert to make after guests arrive', 'Using every burner at the same time', 'Forgetting serving utensils', 'Cleaning while the first guests are at the door'],
    faqs: [
      { q: 'How early should I start preparing for a dinner party?', a: 'Start shopping and make-ahead cooking 24–48 hours before whenever the menu allows.' },
      { q: 'What should I do one hour before a dinner party?', a: 'Finish time-sensitive cooking, set out drinks, reset the kitchen, handle lighting and music and avoid starting new prep projects.' },
      { q: 'When should I set the table for a dinner party?', a: 'If the space allows, set it the night before or the morning of the event so it is off the final-hour list.' }
    ]
  },
  {
    slug: 'dinner-party-menu-planning',
    category: 'hosting',
    title: 'How to Plan a Dinner Party Menu | Practical Host Formula',
    description: 'Plan a dinner party menu around oven space, make-ahead dishes, dietary needs and realistic cooking capacity with a simple host-friendly formula.',
    h1: 'How to plan a dinner party menu your kitchen can actually execute.',
    intro: 'A menu can look perfect on paper and still fail when three dishes need the oven at three temperatures, the host is sautéing during cocktails and every plate requires last-second assembly. Plan around your kitchen, not just the recipes.',
    quickAnswer: 'Choose one centerpiece dish, one make-ahead side, one low-maintenance vegetable or salad and a dessert that is already finished before guests arrive.',
    relatedDownload: 'dinner-party-planner-printable',
    relatedLabel: 'Dinner Party Planner Printable',
    sections: [
      { heading: 'Start with the bottleneck: oven, burners or attention', body: 'Identify the thing your kitchen has least of. In a small kitchen it may be oven racks; with a complicated main it may be your attention. Do not build the rest of the menu around the same bottleneck.' },
      { heading: 'Use the 1 + 1 + 1 + 1 formula', body: 'A reliable structure is one main, one substantial side, one fresh or simple vegetable and one dessert. Add bread, olives or a purchased appetizer if people need something on arrival.', bullets: ['1 centerpiece main', '1 make-ahead or low-touch side', '1 salad or simple vegetable', '1 fully finished dessert'] },
      { heading: 'Make at least half the menu ahead', body: 'A component counts as make-ahead if it is fully finished or only needs a simple reheat. Chopping ingredients early helps, but it still leaves cooking work for later.' },
      { heading: 'Write the menu in cooking order', body: 'List each dish with oven temperature, burner needs and final active minutes. Conflicts become obvious before you buy groceries.' }
    ],
    checklist: ['Dietary restrictions checked', 'Oven temperature conflicts checked', 'At least half the menu make-ahead', 'One low-effort first bite', 'Serving dishes assigned', 'Dessert finished before dinner', 'Backup ice and drinks planned'],
    mistakes: ['Choosing recipes based only on how impressive they look', 'Making multiple last-minute sautéed dishes', 'Serving a heavy appetizer before a heavy meal', 'Ignoring dietary needs until guests arrive', 'Planning dessert that requires a clean kitchen after dinner'],
    faqs: [
      { q: 'How many dishes should I serve at a dinner party?', a: 'For many home dinner parties, a main, a side, a vegetable or salad and dessert is enough, with a simple snack or appetizer if desired.' },
      { q: 'How much of a dinner party menu should be make-ahead?', a: 'Aim for at least half of the menu to be finished or nearly finished before guests arrive.' },
      { q: 'What is the easiest dessert for a dinner party?', a: 'Choose something fully prepared in advance, such as a cake, tart, pudding, cookies or purchased dessert with a simple garnish.' }
    ]
  },
  {
    slug: 'christmas-gift-budget',
    category: 'holiday',
    title: 'Christmas Gift Budget Guide | Simple Holiday Spending Plan',
    description: 'Build a realistic Christmas gift budget by person and category, include hidden holiday costs and track ordered, received and wrapped gifts in one system.',
    h1: 'A Christmas gift budget that accounts for more than the gifts.',
    intro: 'Holiday overspending often comes from the “small” categories around gifts: shipping, stockings, teacher gifts, wrapping, travel and last-minute add-ons. A useful budget lists the whole season before setting per-person amounts.',
    quickAnswer: 'Set one total holiday spending ceiling, reserve money for non-gift costs first, then divide the remaining gift budget by person or group instead of choosing amounts person by person with no overall limit.',
    relatedDownload: 'christmas-planner-printable',
    relatedLabel: 'Christmas Planner Printable',
    sections: [
      { heading: 'Start with a total, not a person-by-person wish list', body: 'Choose the amount you are comfortable spending across the entire season. This prevents a collection of individually reasonable purchases from creating an unreasonable total.' },
      { heading: 'Subtract the non-gift holiday costs', body: 'Reserve money for the categories that usually appear after the gift list is already “done.”', bullets: ['Wrapping and cards', 'Shipping', 'Stockings', 'Host gifts', 'Teacher or service gifts', 'Holiday meals', 'Travel and events'] },
      { heading: 'Create gift buckets', body: 'Divide the remaining gift amount among immediate family, extended family, friends and other recipients. A bucket makes it easier to trade off within a category without changing the overall plan.' },
      { heading: 'Track status, not just cost', body: 'A gift list should show idea, ordered, arrived, wrapped and delivered. That is what prevents duplicate purchases and the expensive “I forgot one thing” shopping trip.' }
    ],
    checklist: ['Total holiday ceiling', 'Non-gift costs reserved', 'Recipient list', 'Budget by person or group', 'Ordered status', 'Arrival status', 'Wrapped status', 'Shipping or delivery deadline'],
    mistakes: ['Budgeting only for gifts', 'Using sale prices as a reason to add more items', 'Forgetting stocking and small-gift totals', 'Losing track of online orders', 'Buying backup gifts before checking what has already arrived'],
    faqs: [
      { q: 'How do I make a Christmas gift budget?', a: 'Choose a total seasonal spending limit, subtract non-gift holiday costs, then divide the remaining amount among recipients or gift groups.' },
      { q: 'What should be included in a Christmas budget?', a: 'Include gifts, stockings, shipping, wrapping, cards, meals, travel, events and smaller appreciation gifts.' },
      { q: 'How do I keep track of Christmas gifts I ordered?', a: 'Track each item through ordered, arrived, wrapped and delivered so you can see what is actually complete.' }
    ]
  },
  {
    slug: 'christmas-hosting-checklist',
    category: 'holiday',
    title: 'Christmas Hosting Checklist | Two Weeks to Christmas Dinner',
    description: 'A Christmas hosting checklist organized from two weeks out through the final hour, covering menu, groceries, guest space, table setup and cooking.',
    h1: 'A Christmas hosting checklist that moves the work out of Christmas morning.',
    intro: 'Holiday hosting becomes stressful when every task is treated as a day-of task. The best plan moves decisions, shopping, guest setup and make-ahead cooking earlier so the holiday itself is mostly finishing and serving.',
    quickAnswer: 'Finalize the guest count and menu two weeks out, shop nonperishables and prep the house one week out, complete make-ahead cooking 1–3 days out and reserve Christmas Day for reheating, roasting and final assembly.',
    relatedDownload: 'christmas-planner-printable',
    relatedLabel: 'Christmas Planner Printable',
    sections: [
      { heading: 'Two weeks out: lock the big decisions', body: 'Confirm who is coming, what time people will arrive and whether there are dietary restrictions. Decide whether guests are bringing anything so the menu is not duplicated.' },
      { heading: 'One week out: prep the house and nonperishables', body: 'Buy shelf-stable ingredients, beverages and household supplies. Check chairs, serving dishes, linens and overnight guest needs before the stores get busier.' },
      { heading: '1–3 days out: cook what improves with time', body: 'Desserts, sauces, dressings, casseroles and many side dishes can be made or assembled ahead. Set the table when practical and stage serving pieces with sticky notes for each dish.' },
      { heading: 'Christmas Day: follow one visible cooking order', body: 'Write the oven temperature and finish time for every hot dish. A simple sequence prevents the classic problem of discovering three dishes all need the same oven at the same time.' }
    ],
    checklist: ['Guest count confirmed', 'Dietary needs checked', 'Menu assigned', 'Nonperishable groceries purchased', 'Serving dishes identified', 'Table set early', 'Beverages chilled', 'Oven schedule written', 'Leftover containers ready'],
    mistakes: ['Leaving grocery shopping until the final day', 'Not confirming what guests are bringing', 'Planning too many oven-dependent side dishes', 'Forgetting fridge space for leftovers', 'Cleaning guest areas after cooking has already started'],
    faqs: [
      { q: 'When should I start preparing to host Christmas?', a: 'Start guest and menu planning about two weeks out, then move shopping and house prep earlier than the final few days.' },
      { q: 'What food can I make ahead for Christmas dinner?', a: 'Many desserts, sauces, dressings, casseroles and side dishes can be fully or partially prepared in advance depending on the recipe.' },
      { q: 'How do I keep Christmas dinner cooking organized?', a: 'Write a single cooking order with oven temperatures, cook times and finish times for every hot dish.' }
    ]
  },
  {
    slug: 'bridal-shower-games-for-groups',
    category: 'wedding',
    title: 'Bridal Shower Games by Group Size | Small, Medium & Large Showers',
    description: 'Choose bridal shower games based on group size, event length and guest mix, with low-pressure ideas for small gatherings through large showers.',
    h1: 'Bridal shower games that fit the group instead of forcing the group to fit the game.',
    intro: 'A game that works beautifully for eight people can become slow and awkward with forty. The easiest way to choose shower activities is to start with guest count, how well people know each other and how much event time you want the games to occupy.',
    quickAnswer: 'For under 12 guests, conversation-based games work well. For 12–25, use paper games plus one group activity. For 25+, choose games everyone can play simultaneously and avoid anything that requires every guest to speak one at a time.',
    relatedDownload: 'bridal-shower-games-printable',
    relatedLabel: 'Bridal Shower Games Printable Pack',
    sections: [
      { heading: 'Small showers: 6–12 guests', body: 'Smaller groups can handle activities where everyone participates verbally. Couple trivia, advice cards and “would she rather?” can turn into actual conversation instead of a long performance.' },
      { heading: 'Medium showers: 12–25 guests', body: 'Paper games become useful because everyone can play at the same time. Pair one seated printable with one optional interactive activity.', bullets: ['Bride trivia', 'Wedding word game', 'Would she rather?', 'Advice or wishes cards'] },
      { heading: 'Large showers: 25+ guests', body: 'Avoid anything that requires going around the room one person at a time. Use timed paper games, table-by-table challenges or passive activities guests can complete during food and conversation.' },
      { heading: 'Plan 20–35 total minutes of structured games', body: 'Unless the event is specifically game-focused, one to three activities is usually enough. People also came to talk, eat and spend time with the guest of honor.' }
    ],
    checklist: ['Guest count', 'Age and relationship mix', 'Available table space', 'Pens or supplies', 'Simple instructions', 'Tie-breaker', 'Small prizes if desired', 'Clear stopping point'],
    mistakes: ['Choosing too many games', 'Using games that embarrass the bride or guests', 'Making forty people introduce themselves before starting', 'Picking activities that require supplies you cannot easily reset', 'Letting games take over the entire shower'],
    faqs: [
      { q: 'How many bridal shower games should you play?', a: 'One to three games is usually enough for a typical shower unless games are a major part of the event.' },
      { q: 'What bridal shower games work for large groups?', a: 'Timed printable games, table challenges and activities everyone can complete simultaneously work better than round-the-room games.' },
      { q: 'Do you need prizes for bridal shower games?', a: 'No, but small prizes can make competitive games more fun. Keep them simple and easy to distribute.' }
    ]
  },
  {
    slug: 'how-to-host-mahjong-night',
    category: 'hosting',
    title: 'How to Host a Mahjong Night | Table Setup, Snacks & Flow',
    description: 'Plan a casual mahjong night with practical table setup, guest count, supplies, snack placement and game-night flow without over-hosting.',
    h1: 'How to host a mahjong night that keeps the table focused on the game.',
    intro: 'Mahjong night does not need elaborate decor or a complicated menu. The host’s main job is to make the table comfortable, the rules clear for the group and the food easy to eat without competing with tiles and score materials.',
    quickAnswer: 'Set the table before guests arrive, keep food and drinks on a nearby side surface, confirm the rules or version your group is playing and choose snacks that can be eaten cleanly between hands.',
    relatedDownload: 'mahjong-party-printables',
    relatedLabel: 'Mahjong Party Printables',
    sections: [
      { heading: 'Set the playing table first', body: 'The table should have enough space for tiles, racks and any score or reference materials. Remove centerpieces, candles or serving platters that shrink the play area.' },
      { heading: 'Put food beside the game, not on top of it', body: 'Use a nearby counter, bar cart or side table for snacks and drinks. Small plates and napkins should be within reach, but greasy finger foods are better avoided around tiles.' },
      { heading: 'Confirm the version and expectations', body: 'Mahjong has different rulesets and house customs. If beginners are joining, tell them what version the group plays and whether you will teach before starting.' },
      { heading: 'Keep hosting decisions simple', body: 'A few snacks, water and one or two other drink options are enough. The more the host has to replenish or cook, the more often the game stops.' }
    ],
    checklist: ['Tiles and racks ready', 'Rule or reference cards', 'Score materials if used', 'Clear playing surface', 'Side surface for food', 'Napkins and coasters', 'Low-mess snacks', 'Water available'],
    mistakes: ['Serving the entire meal on the playing table', 'Assuming everyone knows the same rules', 'Starting before all supplies are laid out', 'Choosing snacks that leave greasy or sticky hands', 'Overplanning decorations instead of table comfort'],
    faqs: [
      { q: 'What do I need to host a mahjong night?', a: 'You need the game set, enough seating, any reference or score materials and a separate place for food and drinks.' },
      { q: 'What food is good for mahjong night?', a: 'Choose low-mess snacks that can be eaten easily between hands and keep them on a side table rather than in the playing area.' },
      { q: 'Can beginners come to a mahjong night?', a: 'Yes. Let them know which ruleset you use and plan a short teaching or practice period before regular play.' }
    ]
  },
  {
    slug: 'aging-parent-care-binder-checklist',
    category: 'family',
    title: 'Aging Parent Care Binder Checklist | What to Organize',
    description: 'A practical checklist for organizing contacts, appointments, medications, insurance references, home information and document locations for an aging parent.',
    h1: 'What to put in an aging parent care binder — and what to keep somewhere more secure.',
    intro: 'A care binder is most useful as a shared reference for the practical information family members regularly need. It should not become a duplicate vault of every sensitive document or password. Organize access, not unnecessary exposure.',
    quickAnswer: 'Include current contacts, provider information, medication references, appointments, insurance details, household contacts and the locations of important legal or financial documents. Keep original legal records, account credentials and highly sensitive information in their proper secure locations.',
    relatedDownload: 'aging-parent-care-binder-printable',
    relatedLabel: 'Aging Parent Care Binder Printable',
    sections: [
      { heading: 'Section 1: people and care contacts', body: 'Keep the names, roles and contact information for the people family members may need to reach quickly.', bullets: ['Primary care provider', 'Specialists', 'Pharmacy', 'Emergency contacts', 'Neighbors or local support', 'Home care providers if applicable'] },
      { heading: 'Section 2: appointments and medication reference', body: 'Use the binder to track appointment dates, questions and a current medication list. Update medication information whenever a provider changes it rather than letting old pages remain mixed in.' },
      { heading: 'Section 3: insurance and household information', body: 'Include insurance company names, member-service phone numbers, home service contacts and recurring household information that a caregiver may need to coordinate.' },
      { heading: 'Section 4: document location map', body: 'Instead of photocopying every legal or financial document into the binder, record where originals are securely kept and who has authorized access. The binder can point to the information without becoming the least secure place it lives.' }
    ],
    checklist: ['Emergency contacts', 'Provider list', 'Pharmacy', 'Current medication list', 'Upcoming appointments', 'Insurance references', 'Home service contacts', 'Document location notes', 'Last updated date on key pages'],
    mistakes: ['Writing passwords in an easily accessible binder', 'Keeping outdated medication pages mixed with current ones', 'Copying every sensitive document into one physical location', 'Failing to date updates', 'Assuming all family members have legal authority to access every record'],
    faqs: [
      { q: 'What should be in a caregiver binder for an aging parent?', a: 'Include contacts, provider and pharmacy information, medication references, appointments, insurance details, household contacts and notes about where important documents are stored.' },
      { q: 'Should passwords be kept in a care binder?', a: 'Generally, avoid placing unnecessary credentials in a binder that multiple people may access. Use an appropriate secure method for account access.' },
      { q: 'How often should an aging parent care binder be updated?', a: 'Update it whenever medications, providers, insurance or key contacts change, and review the core pages periodically for stale information.' }
    ]
  },
  {
    slug: 'creator-media-kit-sections',
    category: 'creator',
    title: 'What to Put in a Creator Media Kit | Sections Brands Actually Need',
    description: 'Build a concise creator media kit with the sections brands need: positioning, audience, services, examples, performance context and a clear contact path.',
    h1: 'What to put in a creator media kit so a brand can understand you in two minutes.',
    intro: 'A media kit is not a full autobiography or a screenshot dump of every metric. It is a decision document. A brand should be able to understand who you reach, what you make, what you offer and how to contact you without digging.',
    quickAnswer: 'Use 5–8 concise sections: positioning, audience, platform metrics, content examples, services, selected results or partnerships, optional rates/process and contact information.',
    relatedDownload: 'creator-media-kit-template',
    relatedLabel: 'Creator Media Kit Template',
    sections: [
      { heading: 'Lead with positioning, not follower count', body: 'Start with one or two sentences explaining your content niche, audience and point of view. Brands need context before metrics.' },
      { heading: 'Show audience and platform metrics with labels', body: 'Use current numbers and identify the date range or platform where needed. Avoid mixing lifetime, monthly and single-post metrics without explaining what they represent.', bullets: ['Followers or subscribers', 'Average views or reach', 'Engagement metric when meaningful', 'Audience location or age when relevant', 'Newsletter size if part of the offer'] },
      { heading: 'Make services easy to scan', body: 'List what a brand can actually hire you for: sponsored content, UGC, photography, short-form video, event coverage, newsletter placements or other deliverables you genuinely offer.' },
      { heading: 'Use proof selectively', body: 'One strong campaign example with a result and a short explanation is more useful than ten brand logos with no context. Show what you created and why it mattered.' },
      { heading: 'End with the next step', body: 'Put the preferred email or inquiry path on the final page and make it visually obvious. A media kit should create a conversation, not become the conversation itself.' }
    ],
    checklist: ['One-sentence positioning', 'Current audience metrics', 'Primary platforms', 'Services and deliverables', '2–4 content examples', 'Selected partnership or result', 'Contact information', 'Last updated date'],
    mistakes: ['Opening with a long personal biography', 'Including outdated screenshots', 'Showing metrics with no timeframe', 'Listing services you do not actually want to sell', 'Using tiny text to fit too much onto one page', 'Forgetting a clear contact method'],
    faqs: [
      { q: 'How many pages should a creator media kit be?', a: 'Many creators can communicate the essentials in 3–6 pages. The exact length matters less than keeping it easy to scan.' },
      { q: 'Should I put rates in my media kit?', a: 'It is optional. Include them if your pricing is standardized; leave them out if scope varies significantly by campaign.' },
      { q: 'What metrics should a creator include in a media kit?', a: 'Use current, relevant platform metrics such as followers, reach or views, engagement when meaningful and audience demographics that help a brand evaluate fit.' }
    ]
  }
];

export const supportGuideMap = new Map(supportGuides.map((guide) => [guide.slug, guide]));
