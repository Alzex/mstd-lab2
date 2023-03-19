export class List {
  constructor(private items: string[] = []) {}

  private validateItem(item: string): void {
    if (!item || item.length !== 1) {
      throw new Error('Invalid item');
    }
  }
    
  private validateIndex(index: number): void {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Invalid index');
    }
  }
  
  length(): number {
    return this.items.length;
  }

  append(item: string): void {
    this.validateItem(item);
    this.items.push(item);
  }

  insert(item: string, index: number): void {
    this.validateIndex(item);
    this.validateItem(item);
    this.items.splice(index, 0, item);
  }

  delete(index: number): void {
    this.items.splice(index, 1);
  }

  deleteAll(): void {
    this.items = [];
  }

  get(index: number): string {
    this.validateIndex(item);
    return this.items[index];
  }

  clone(): List {
    return new List(this.items.slice());
  }

  reverse(): void {
    this.items.reverse();
  }

  findLast(): string {
    return this.items[this.items.length - 1];
  }

  clear(): void {
    this.items = [];
  }

  extend(list: List): void {
    this.items = this.items.concat(list.items);
  }
}
