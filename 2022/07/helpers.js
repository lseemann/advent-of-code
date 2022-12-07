const ROOT_ID = 'root';

const getFileSize = (fileSystem, file, total) => {
  if (!file) {
    return 0;
  }

  let newTotal = total || 0;

  if (file.type === 'file') {
    newTotal += file.size;

    return newTotal;
  }

  const children = getChildren(fileSystem, file.id);

  children.forEach(child => {
    newTotal += getFileSize(fileSystem, child)
  })

  return newTotal;
}

const fileExists = (fileSystem, name, parentId) => {
  return fileSystem.some(file => file.name === name && file.parentId === parentId)
}

const createFile = (fileSystem, name, parentId, type, size) => {
  if (fileExists(fileSystem, name, parentId)) {
    return fileSystem;
  }

  return [
    ...fileSystem, 
    {
      id: generateID(),
      parentId,
      name,
      type,
      size,
    },
  ];
}

const getFileSystem = (data) => {
  let fileSystem = [{
    id: ROOT_ID,
    name: '/',
    parentId: null,
    type: 'dir',
    size: 0,
  }];
  let currentDirectory = ROOT_ID;

  const lines = data.split(/\r?\n/).filter(line => line);

  lines.forEach((line, i) => {
    if (line.substr(0, 1) === '$') {
      const [, command, argument] = line.split(' ');

      if (command === 'cd' && argument === '..') {
        currentDirectory = getFile(fileSystem, currentDirectory).parentId;
      } else if (command === 'cd' && argument === '/') {
        currentDirectory = ROOT_ID;
      } else if (command === 'cd' && argument !== '/') {
        const changedDirectory = getChildren(fileSystem, currentDirectory).find(dir => dir.name === argument);
      
        currentDirectory = changedDirectory.id;
      } else if (command === 'ls') {
        // Do nothing
      }
    } else {
      const [leadin, name] = line.split(' ');

      fileSystem = createFile(
        fileSystem,
        name,
        currentDirectory,
        leadin === 'dir' ? 'dir' : 'file', // type
        leadin === 'dir' ? 0 : parseInt(leadin), // size
      );
    }
  })

  return fileSystem;
}

const getFile = (fileSystem, id) => {
  return fileSystem.find(d => d.id === id);
}

const getFileByNameAndParent = (fileSystem, name, parentId) => {
  const children = getChildren(fileSystem, parentId);

  return children.find(child => child.name === name);
}

const getChildren = (fileSystem, parentId) => {
  return fileSystem.filter(f => f.parentId === parentId);
}

// Not statistically sound
const generateID = () => {
  return Math.floor(Math.random() * 9999999999999999999999).toString();
}

module.exports = {
  getChildren,
  getFileSize,
  getFileSystem,
  getFile,
  getFileByNameAndParent,
  ROOT_ID
};
