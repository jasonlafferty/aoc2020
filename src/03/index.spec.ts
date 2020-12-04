import {
    transformInput,
    traverseWhileCountingTrees,
    mulitplerTraverseTreesCount,
    answerOne,
    answerTwo,
} from '.';

const map = transformInput(`..##.........##.........##.........##.........##.........##.......
#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....
.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
.#........#.#........#.#........#.#........#.#........#.#........#
#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...
#...##....##...##....##...##....##...##....##...##....##...##....#
.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#`);

describe('Day 3: Toboggan Trajectory', () => {
    test('traverseWhileCountingTrees [1, 1]', () => {
        expect(traverseWhileCountingTrees(map, 1, 1)).toEqual(2);
    });

    test('traverseWhileCountingTrees [3, 1]', () => {
        expect(traverseWhileCountingTrees(map, 3, 1)).toEqual(7);
    });

    test('traverseWhileCountingTrees [5, 1]', () => {
        expect(traverseWhileCountingTrees(map, 5, 1)).toEqual(3);
    });

    test('traverseWhileCountingTrees [7, 1]', () => {
        expect(traverseWhileCountingTrees(map, 7, 1)).toEqual(4);
    });

    test('traverseWhileCountingTrees [1, 2]', () => {
        expect(traverseWhileCountingTrees(map, 1, 2)).toEqual(2);
    });

    test('answerOne', () => {
        expect(answerOne()).toEqual(252);
    });

    test('mulitpler', () => {
        expect(mulitplerTraverseTreesCount(map)).toEqual(336);
    });

    test('answerTwo', () => {
        expect(answerTwo()).toEqual(2608962048);
    });
});
  