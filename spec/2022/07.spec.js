const { readFileSync } = require('fs');
const path = require('path');
const { getChildren, getFileSize, getFileSystem, getFileByNameAndParent, ROOT_ID } = require('../../2022/07/helpers');

const data = readFileSync(path.resolve(__dirname, '../../2022/07/test-data.txt'), 'utf-8');
const fileSystem = getFileSystem(data);

const a = getFileByNameAndParent(fileSystem, 'a', ROOT_ID);
const d = getFileByNameAndParent(fileSystem, 'd', ROOT_ID);
const e = getFileByNameAndParent(fileSystem, 'e', a.id);
const i = getFileByNameAndParent(fileSystem, 'i', e.id);

describe('Day 7 Part I', () => {
  it('parses correctly', () => {
    expect(getChildren(fileSystem, ROOT_ID).map(f => f.name)).toEqual(['a', 'b.txt', 'c.dat', 'd']);
    expect(i.type).toBe('file');
    expect(i.size).toBe(584);
    expect(getChildren(fileSystem, a.id).map(f => f.name)).toEqual(['e', 'f', 'g', 'h.lst']);
    expect(getChildren(fileSystem, d.id).map(f => f.name)).toEqual(['j', 'd.log', 'd.ext', 'k']);
  })

  it('finds the correct size for directories', () => {
    expect(getFileSize(fileSystem, e)).toBe(584);
    expect(getFileSize(fileSystem, a)).toBe(94853);
    expect(getFileSize(fileSystem, d)).toBe(24933642);
    expect(getFileSize(fileSystem, fileSystem[0])).toBe(48381165);
  });
});
