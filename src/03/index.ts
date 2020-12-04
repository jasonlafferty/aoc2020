import { input } from './input';

const tree = "🎄";
const hitTree = "💥";
const openSpace = "🚩";

export const transformInput = (j: string) => j.split('\n').map((m) => m.split('').map((i) => i === "#" ? tree : "⛄" ));

const prettyPrint = (j: string[][]) => j.map((m)=> m.join("")).join("\n")

export const traverseWhileCountingTrees = (map: string[][], right: number, down: number) => {
    const clonedMap = [...map.map(m => [...m])]
    const width = map[0].length;

    let startingPoint = 0;

    const count = clonedMap.
        filter((_, index) => index % down === 0).
        reduce((treeCount, row, index) => {        
        if(index === 0) {
            return treeCount;
        }

        startingPoint = startingPoint + right;

        if(startingPoint >= width){
            startingPoint = startingPoint % width
        }
 
        if (row[startingPoint] === tree) {
            row[startingPoint] = hitTree;
            return treeCount + 1
        } else {
            row[startingPoint] = openSpace;
            return treeCount
        }
    }, 0)

    /* Looks like:
     * ⛄⛄🎄🎄⛄⛄⛄⛄⛄⛄⛄⛄⛄🎄🎄⛄⛄⛄⛄⛄
     * 🎄⛄⛄🚩🎄⛄⛄⛄🎄⛄⛄🎄⛄⛄⛄🎄⛄⛄⛄🎄
     * ⛄🎄⛄⛄⛄⛄💥⛄⛄🎄⛄⛄🎄⛄⛄⛄⛄🎄⛄⛄
     * ⛄⛄🎄⛄🎄⛄⛄⛄🎄🚩🎄⛄⛄🎄⛄🎄⛄⛄⛄🎄
     * ⛄🎄⛄⛄⛄🎄🎄⛄⛄🎄⛄⛄💥⛄⛄⛄🎄🎄⛄⛄
     * ⛄⛄🎄⛄🎄🎄⛄⛄⛄⛄⛄⛄⛄🎄⛄💥🎄⛄⛄⛄
     * ⛄🎄⛄🎄⛄🎄⛄⛄⛄⛄🎄⛄🎄⛄🎄⛄🎄⛄🚩⛄
    */
    // console.log(prettyPrint(clonedMap));

    return count
}

export const answerOne = () => {
    const map = transformInput(input);

    return traverseWhileCountingTrees(map, 3, 1);
}

export const mulitplerTraverseTreesCount = (map: string[][]) => {
    const pattern = [
        [ 1, 1.],
        [ 3, 1.],
        [ 5, 1.],
        [ 7, 1.],
        [ 1, 2.],
    ]

    return pattern.
                map(([right, down]) => traverseWhileCountingTrees(map, right, down)).
                reduce((m, count)=> m * count);
}

export const answerTwo = () => {
    return mulitplerTraverseTreesCount(transformInput(input));
}
