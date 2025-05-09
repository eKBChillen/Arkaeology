const { createApp } = Vue;

createApp({
  data() {
    return {
      navLinks: [
        { text: 'Home', href: '../index.html', active: false },
        { text: 'Cluster Info', href: '../Page2.html', active: true },
        { text: 'Store', href: '../Page3.html', active: false },
        { text: 'Discord', href: '../Page4.html', active: false },
        { text: 'Gallery', href: '../Page5.html', active: false },
      ],
      heading: 'ARKAEOLOGY CLUSTER INFO',
      columns: [
        {
          sections: [
            {
              title: 'SERVER NAME',
              items: ['Arkaeology (Full Crossplay)']
            },
            {
              title: 'SERVER MULTIPLIERS',
              items: [
                'Harvest: x5','XP: x2','Tame: x5','Hatch: x150','Mature: x30',
                'Imp Quality: x2','Tribe dino limit: 200','Crop growth: 1.5',
                'Dino Decay x2.5 (slower)','Structure Decay x2.5 (slower)'
              ]
            },
            {
              title: 'DINO MULTIPLIER',
              items: ['Weight x100']
            }
          ]
        },
        {
          sections: [
            {
              title: 'MODDED SETTINGS',
              items: [
                'Unlimited Mindwipes','Cryosickness Disabled','Flyer Carry Enabled',
                'Cave Building Enabled','Structure Pickup','Engrams auto-unlock'
              ]
            },
            {
              title: 'PLAYER MULTIPLIERS',
              items: [
                'Health x2.5','Stamina x2','Weight x100','Melee x1.5',
                'Fortitude x5','Crafting Speed x1.25'
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'DECAY TIMERS',
              items: [
                'Thatch Decay/Destroy: 10/14 days','Wood Decay/Destroy: 20/28 days',
                'Adobe Decay/Destroy: 20/28 days','Stone Decay/Destroy: 30/42 days',
                'Metal Decay/Destroy: 40/56 days','Greenhouse Decay/Destroy: 40/56 days',
                'Tek Decay/Destroy: 50/70 days','Creatures Decay/Destroy: 20/20 days',
                'Utility Decay/Destroy: 10/14 days','Vault Decay/Destroy: 40/56 days',
                'Oil Well Decay/Destroy: 5/7 days'
              ]
            },
            {
              title: 'DINO LEVELS',
              items: ['Dino Max Level: 150','Wyvern Max Level: 190','Tek Max Level: 180']
            }
          ]
        }
      ],
      breeding: {
        title: 'BREEDING MULTIPLIERS',
        imgSrc: '../Images/mating multiplier.png'
      },
      footerText: '© 2025 arkaeologycluster.com. All rights reserved.'
    };
  }
}).mount('#app');
