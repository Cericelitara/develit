interface Record {
  jk: number;
}

const record: Record = {
  jk: 20000,
};

function updateRecord(key: keyof Record, value: number): void {
  if (record.hasOwnProperty(key)) {
    record[key] = value;
  }
}

// Usage
updateRecord('jk', 25000);
