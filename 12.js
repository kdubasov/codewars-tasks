class PaginationHelper {
   constructor(collection, itemsPerPage) {
      this.collection = collection
      this.itemsPerPage = itemsPerPage
   }
   itemCount() {
      // returns the number of items within the entire collection
      return this.collection.length
   }
   pageCount() {
      // returns the number of pages
      return Math.ceil(this.collection.length / this.itemsPerPage)
   }
   pageItemCount(pageIndex) {
      if (pageIndex < 0) return -1
      // returns the number of items on the current page. page_index is zero based.
      // this method should return -1 for pageIndex values that are out of range
      return this.collection.slice(pageIndex * this.itemsPerPage, pageIndex * this.itemsPerPage + this.itemsPerPage).length || -1
   }
   pageIndex(itemIndex) {
      if (itemIndex < 0 || itemIndex > this.collection.length) return -1
      // determines what page an item is on. Zero based indexes
      // this method should return -1 for itemIndex values that are out of range
      const page = Math.floor(itemIndex / this.itemsPerPage)
      console.log(page)
      return (page > this.pageCount() || page < 0) ? -1 : page
   }
}

const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// console.log(helper.pageCount()); // should == 2
// console.log(helper.itemCount()); // should == 6
// console.log(helper.pageItemCount(0)); // should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(0));
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1