class Node {
  value: string;
  next: Node | null;
  prev: Node | null;

  constructor(value: string, next: Node | null = null, prev: Node | null = null) {
    if (!value || value.length !== 1) {
      throw new Error('Invalid item');
    }
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class List {
  head: Node | null;
  amount: number = 0;
  constructor(first: string = null) {
    this.head = first && new Node(first);
  }

  private validateIndex(index: number): void {
    if (index < 0 || index >= this.amount) {
      throw new Error('Invalid index');
    }
  }

  private getNode(index: number): Node {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  length(): number {
    return this.amount;
  }

  append(value: string): void {
    if (!this.head) {
      this.head = new Node(value);
      this.amount++;
      return;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    node.next = new Node(value, null, node);
    this.amount++;
  }

  get(index: number): string {
    this.validateIndex(index);
    let node = this.getNode(index);
    return node.value;
  }

  insert(value: string, index: number): void {
    this.validateIndex(index);

    const node = this.getNode(index);

    const newNode = new Node(value, node, node.prev);

    if (node.prev) {
      node.prev.next = newNode;
    }

    node.prev = newNode;

    this.amount++;
  }

  delete(index: number): void {
    this.validateIndex(index);

    let node = this.getNode(index);

    const prev = node.prev;
    const next = node.next;

    if (next) {
      next.prev = prev;
    }
    if (prev) {
      prev.next = next;
    } else {
      this.head = next;
    }

    this.amount--;
  }
  deleteAll(value: string): void {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        const prev = node.prev;
        const next = node.next;
        if (prev) {
          prev.next = next;
        } else {
          this.head = next;
        }
        if (next) {
          next.prev = prev;
        }
      }
      node = node.next;
    }
  }
  reverse() {
    let current = this.head;
    let temp: Node | null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp) {
      this.head = temp.prev;
    }
  }
  clear(): void {
    this.head = null;
    this.amount = 0;
  }
  clone(): List {
    const newList = new List();
    let node = this.head;
    while (node) {
      newList.append(node.value);
      node = node.next;
    }
    return newList;
  }
  findLast(): string {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node.value;
  }
  extend(list: List): void {
    let node = list.head;
    while (node) {
      this.append(node.value);
      node = node.next;
    }
  }
}
