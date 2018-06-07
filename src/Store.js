class Store {
  constructor(opts) {
    this.StoreKeyPrefix = 'drink-track.link_';
    this.StoreKey = this.StoreKeyPrefix + new Date().toLocaleDateString();
    this.baseStruct = {
      data: []
    };
    this.init();
  }

  init() {
    let data = this.load();
    if(!data) {
      window.localStorage.setItem(this.StoreKey, JSON.stringify(this.baseStruct));
    }
  }

  getAllItems() {
    let allItems = [];
    // Load all Local Storage Items
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      let dateKey = localStorage.key( i ).replace(this.StoreKeyPrefix, '')
      allItems.push({date: dateKey, data: localStorage.getItem( localStorage.key( i )) });
    }

    return allItems;
  }

  save(thing, key = this.StoreKey) {
    let items = JSON.parse(this.load(key));
    console.log(this, items);
    items.data.push(thing);
    window.localStorage.setItem(key, JSON.stringify(items))
  }

  load(key = this.StoreKey) {
    return window.localStorage.getItem(key);
  }
}

export default Store;
