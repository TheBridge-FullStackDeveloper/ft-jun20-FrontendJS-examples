function findSmallestInt(args) {
    console.log(args.sort((a, b) => {
        return (a - b);
    }));
}

findSmallestInt([0, 2, 3, 4, 6, 3, 2]);