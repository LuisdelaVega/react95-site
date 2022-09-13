clippy.ready("F1", {
  overlayCount: 2,
  sounds: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ],
  framesize: [124, 93],
  animations: {
    Congratulate: {
      frames: [
        {
          duration: 100,
          images: [[0, 0]],
          exitBranch: 46,
          sound: "29",
          branching: { branches: [{ frameIndex: 23, weight: 85 }] },
        },
        { duration: 100, images: [[124, 0]] },
        { duration: 100, images: [[248, 0]] },
        { duration: 100, images: [[372, 0]] },
        { duration: 100, images: [[496, 0]] },
        { duration: 100, images: [[620, 0]] },
        { duration: 100, images: [[744, 0]] },
        { duration: 100, images: [[868, 0]], sound: "15" },
        { duration: 100, images: [[992, 0]] },
        { duration: 1000, images: [[1116, 0]], exitBranch: 20 },
        { duration: 330, images: [[1240, 0]] },
        { duration: 500, images: [[1116, 0]], exitBranch: 20 },
        { duration: 100, images: [[1240, 0]] },
        { duration: 300, images: [[1116, 0]], exitBranch: 20 },
        { duration: 100, images: [[1240, 0]] },
        { duration: 600, images: [[1116, 0]], exitBranch: 20 },
        { duration: 100, images: [[1240, 0]] },
        { duration: 1000, images: [[1116, 0]], exitBranch: 20 },
        { duration: 330, images: [[1240, 0]] },
        { duration: 660, images: [[1364, 0]] },
        { duration: 200, images: [[1488, 0]], sound: "22" },
        { duration: 130, images: [[1612, 0]] },
        {
          duration: 100,
          images: [[124, 0]],
          exitBranch: 46,
          branching: { branches: [{ frameIndex: 46, weight: 100 }] },
        },
        { duration: 100, images: [[1736, 0]] },
        { duration: 100, images: [[1860, 0]] },
        { duration: 100, images: [[1984, 0]] },
        { duration: 100, images: [[2108, 0]] },
        { duration: 100, images: [[2232, 0]], exitBranch: 46, sound: "11" },
        { duration: 100, images: [[2356, 0]] },
        { duration: 100, images: [[2480, 0]] },
        { duration: 100, images: [[2604, 0]], exitBranch: 35 },
        { duration: 160, images: [[2728, 0]] },
        { duration: 200, images: [[2852, 0]], exitBranch: 35 },
        { duration: 300, images: [[2976, 0]] },
        { duration: 200, images: [[3100, 0]], sound: "19" },
        { duration: 160, images: [[0, 93]] },
        {
          duration: 100,
          images: [[124, 93]],
          exitBranch: 46,
          branching: { branches: [{ frameIndex: 46, weight: 80 }] },
        },
        { duration: 130, images: [[248, 93]] },
        { duration: 100, images: [[372, 93]], sound: "12" },
        { duration: 100, images: [[496, 93]] },
        { duration: 100, images: [[620, 93]] },
        { duration: 100, images: [[744, 93]] },
        { duration: 100, images: [[868, 93]] },
        { duration: 100, images: [[992, 93]], sound: "8" },
        { duration: 130, images: [[1116, 93]] },
        { duration: 130, images: [[1240, 93]], exitBranch: 46 },
        { duration: 100, images: [[1364, 93]] },
      ],
    },
    LookRight: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[620, 744]] },
        { duration: 100, images: [[744, 744]] },
        { duration: 100, images: [[868, 744]] },
        { duration: 400, images: [[992, 744]] },
        { duration: 100, images: [[1116, 744]] },
        { duration: 100, images: [[1240, 744]], exitBranch: 7 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    IdleLookDown: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 330,
          images: [[1860, 93]],
          exitBranch: 10,
          branching: { branches: [{ frameIndex: 1, weight: 75 }] },
        },
        { duration: 100, images: [[1984, 93]] },
        {
          duration: 330,
          images: [[2108, 93]],
          exitBranch: 10,
          branching: { branches: [{ frameIndex: 3, weight: 75 }] },
        },
        { duration: 100, images: [[2232, 93]] },
        { duration: 100, images: [[2356, 93]], exitBranch: 10 },
        {
          duration: 100,
          images: [[2480, 93]],
          exitBranch: 7,
          branching: { branches: [{ frameIndex: 3, weight: 30 }] },
        },
        { duration: 400, images: [[2604, 93]], exitBranch: 10 },
        { duration: 100, images: [[2728, 93]] },
        { duration: 100, images: [[2852, 93]], exitBranch: 10 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Thinking: {
      frames: [
        {
          duration: 100,
          images: [[0, 0]],
          exitBranch: 27,
          sound: "29",
          branching: { branches: [{ frameIndex: 22, weight: 50 }] },
        },
        { duration: 100, images: [[2976, 93]] },
        { duration: 100, images: [[3100, 93]] },
        { duration: 100, images: [[0, 186]] },
        { duration: 100, images: [[124, 186]] },
        { duration: 100, images: [[248, 186]], sound: "15" },
        { duration: 100, images: [[372, 186]], exitBranch: 14 },
        { duration: 100, images: [[496, 186]] },
        { duration: 100, images: [[620, 186]] },
        { duration: 100, images: [[744, 186]], sound: "22" },
        {
          duration: 100,
          images: [[868, 186]],
          exitBranch: 19,
          branching: { branches: [{ frameIndex: 19, weight: 100 }] },
        },
        { duration: 100, images: [[992, 186]] },
        { duration: 100, images: [[1116, 186]] },
        { duration: 100, images: [[1240, 186]], sound: "15" },
        { duration: 100, images: [[1364, 186]] },
        { duration: 100, images: [[1488, 186]] },
        { duration: 100, images: [[1612, 186]] },
        { duration: 100, images: [[1736, 186]] },
        { duration: 100, images: [[1860, 186]], sound: "22" },
        { duration: 100, images: [[1984, 186]] },
        { duration: 100, images: [[2108, 186]] },
        {
          duration: 100,
          images: [[2232, 186]],
          exitBranch: 27,
          branching: { branches: [{ frameIndex: 27, weight: 100 }] },
        },
        { duration: 100, images: [[2356, 186]] },
        { duration: 100, images: [[2480, 186]] },
        { duration: 100, images: [[2604, 186]] },
        { duration: 100, images: [[2728, 186]] },
        { duration: 100, images: [[2604, 186]], exitBranch: 27 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Explain: {
      frames: [
        {
          duration: 100,
          images: [[1364, 93]],
          exitBranch: 38,
          branching: {
            branches: [
              { frameIndex: 18, weight: 33 },
              { frameIndex: 32, weight: 33 },
            ],
          },
        },
        { duration: 100, images: [[1736, 0]], exitBranch: 38 },
        { duration: 100, images: [[1860, 0]] },
        { duration: 100, images: [[1984, 0]] },
        { duration: 100, images: [[2108, 0]] },
        { duration: 100, images: [[2232, 0]] },
        { duration: 100, images: [[2356, 0]] },
        { duration: 100, images: [[2480, 0]] },
        { duration: 100, images: [[2604, 0]] },
        { duration: 100, images: [[2728, 0]] },
        { duration: 100, images: [[2852, 0]] },
        { duration: 300, images: [[2976, 0]] },
        { duration: 100, images: [[3100, 0]] },
        { duration: 100, images: [[0, 93]] },
        { duration: 100, images: [[2852, 186]] },
        { duration: 100, images: [[2976, 186]] },
        { duration: 100, images: [[3100, 186]] },
        {
          duration: 100,
          images: [[124, 93]],
          exitBranch: 38,
          branching: { branches: [{ frameIndex: 38, weight: 100 }] },
        },
        { duration: 100, images: [[0, 279]] },
        { duration: 100, images: [[124, 279]] },
        { duration: 100, images: [[248, 279]] },
        { duration: 100, images: [[372, 279]] },
        { duration: 100, images: [[496, 279]] },
        { duration: 100, images: [[620, 279]] },
        { duration: 100, images: [[744, 279]] },
        { duration: 100, images: [[868, 279]] },
        { duration: 500, images: [[992, 279]] },
        { duration: 100, images: [[1116, 279]] },
        { duration: 100, images: [[1240, 279]] },
        { duration: 100, images: [[1364, 279]] },
        { duration: 100, images: [[1488, 279]] },
        {
          duration: 100,
          images: [[1612, 279]],
          exitBranch: 38,
          branching: { branches: [{ frameIndex: 38, weight: 100 }] },
        },
        { duration: 100, images: [[2356, 186]] },
        { duration: 100, images: [[2480, 186]] },
        { duration: 100, images: [[2604, 186]] },
        { duration: 100, images: [[2728, 186]] },
        { duration: 100, images: [[2604, 186]] },
        { duration: 100, images: [[2480, 186]], exitBranch: 38 },
        { duration: 50, images: [[0, 0]] },
      ],
    },
    IdleCuteToeTwist: {
      frames: [
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 18,
          branching: { branches: [{ frameIndex: 0, weight: 85 }] },
        },
        { duration: 100, images: [[1736, 279]] },
        {
          duration: 100,
          images: [[1860, 279]],
          exitBranch: 18,
          branching: { branches: [{ frameIndex: 0, weight: 50 }] },
        },
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 18,
          branching: { branches: [{ frameIndex: 3, weight: 50 }] },
        },
        { duration: 100, images: [[1736, 279]] },
        {
          duration: 100,
          images: [[1860, 279]],
          exitBranch: 18,
          branching: { branches: [{ frameIndex: 3, weight: 50 }] },
        },
        { duration: 100, images: [[1984, 279]], exitBranch: 18 },
        { duration: 100, images: [[2108, 279]] },
        { duration: 100, images: [[2232, 279]] },
        { duration: 100, images: [[2356, 279]] },
        { duration: 100, images: [[2480, 279]] },
        { duration: 100, images: [[2604, 279]] },
        { duration: 100, images: [[2728, 279]] },
        { duration: 100, images: [[2852, 279]] },
        { duration: 100, images: [[2976, 279]] },
        { duration: 100, images: [[3100, 279]] },
        { duration: 100, images: [[0, 372]] },
        { duration: 330, images: [[124, 0]], exitBranch: 18 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Writing: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 100, images: [[2852, 1395]] },
        { duration: 100, images: [[2976, 1395]] },
        { duration: 100, images: [[3100, 1395]] },
        { duration: 100, images: [[0, 1488]] },
        { duration: 100, images: [[124, 1488]], sound: "5" },
        { duration: 100, images: [[248, 1488]] },
        { duration: 100, images: [[372, 1488]] },
        { duration: 100, images: [[496, 1488]] },
        { duration: 100, images: [[620, 1488]] },
        { duration: 100, images: [[744, 1488]] },
        { duration: 100, images: [[868, 1488]] },
        { duration: 100, images: [[992, 1488]] },
        { duration: 100, images: [[1116, 1488]], exitBranch: 66 },
        { duration: 100, images: [[1240, 1488]] },
        { duration: 100, images: [[1364, 1488]] },
        { duration: 100, images: [[1488, 1488]] },
        { duration: 100, images: [[1612, 1488]] },
        { duration: 100, images: [[1736, 1488]], exitBranch: 66 },
        { duration: 100, images: [[1860, 1488]] },
        { duration: 100, images: [[1984, 1488]] },
        { duration: 100, images: [[2108, 1488]] },
        { duration: 100, images: [[2232, 1488]] },
        { duration: 100, images: [[2356, 1488]] },
        { duration: 100, images: [[2480, 1488]] },
        { duration: 100, images: [[2604, 1488]] },
        { duration: 100, images: [[2728, 1488]], exitBranch: 66 },
        { duration: 100, images: [[2852, 1488]] },
        { duration: 100, images: [[2976, 1488]] },
        { duration: 100, images: [[3100, 1488]] },
        { duration: 100, images: [[0, 1581]] },
        { duration: 100, images: [[124, 1581]], exitBranch: 66 },
        { duration: 100, images: [[248, 1581]] },
        { duration: 100, images: [[372, 1581]] },
        { duration: 100, images: [[496, 1581]] },
        { duration: 100, images: [[620, 1581]] },
        { duration: 100, images: [[744, 1581]] },
        { duration: 100, images: [[868, 1581]], exitBranch: 66 },
        { duration: 100, images: [[992, 1581]] },
        { duration: 100, images: [[1116, 1581]] },
        {
          duration: 100,
          images: [[1240, 1581]],
          branching: { branches: [{ frameIndex: 16, weight: 100 }] },
        },
        { duration: 100, images: [[1364, 1581]] },
        { duration: 100, images: [[1488, 1581]] },
        { duration: 100, images: [[1612, 1581]] },
        { duration: 100, images: [[1736, 1581]] },
        { duration: 330, images: [[1860, 1581]] },
        { duration: 100, images: [[1984, 1581]], exitBranch: 66 },
        { duration: 100, images: [[2108, 1581]] },
        { duration: 100, images: [[2232, 1581]], sound: "27" },
        { duration: 100, images: [[2356, 1581]] },
        { duration: 100, images: [[2480, 1581]] },
        { duration: 100, images: [[2604, 1581]] },
        { duration: 100, images: [[2728, 1581]] },
        { duration: 100, images: [[2852, 1581]] },
        { duration: 100, images: [[2976, 1581]] },
        { duration: 100, images: [[3100, 1581]] },
        { duration: 100, images: [[0, 1674]] },
        { duration: 100, images: [[124, 1674]] },
        { duration: 100, images: [[248, 1674]], sound: "17" },
        { duration: 100, images: [[372, 1674]] },
        { duration: 100, images: [[496, 1674]] },
        { duration: 100, images: [[620, 1674]], sound: "24" },
        { duration: 100, images: [[744, 1674]] },
        { duration: 100, images: [[868, 1674]] },
        { duration: 100, images: [[992, 1674]] },
        { duration: 100, images: [[1116, 1674]] },
        {
          duration: 100,
          images: [
            [248, 465],
            [1240, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [372, 465],
            [1240, 1674],
          ],
          sound: "7",
        },
        {
          duration: 100,
          images: [
            [496, 465],
            [1240, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 1674],
          ],
          sound: "13",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [496, 465],
            [2480, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [372, 465],
            [2604, 1674],
          ],
          sound: "28",
        },
        {
          duration: 100,
          images: [
            [248, 465],
            [2728, 1674],
          ],
        },
        { duration: 100, images: [[2852, 1674]] },
        { duration: 100, images: [[2976, 1674]] },
        { duration: 100, images: [[3100, 1674]], exitBranch: 86 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    IdleLowersBrows: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 330, images: [[1860, 93]], exitBranch: 10 },
        { duration: 100, images: [[1984, 93]] },
        {
          duration: 330,
          images: [[2108, 93]],
          exitBranch: 4,
          branching: { branches: [{ frameIndex: 3, weight: 75 }] },
        },
        { duration: 100, images: [[2232, 93]] },
        { duration: 100, images: [[2356, 93]], exitBranch: 10 },
        {
          duration: 100,
          images: [[2480, 93]],
          exitBranch: 10,
          branching: { branches: [{ frameIndex: 3, weight: 100 }] },
        },
        { duration: 400, images: [[2604, 93]] },
        { duration: 100, images: [[2728, 93]] },
        { duration: 100, images: [[2852, 93]], exitBranch: 10 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    IdleBlink: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 2,
          branching: { branches: [{ frameIndex: 1, weight: 50 }] },
        },
        { duration: 100, images: [[1736, 279]] },
        {
          duration: 100,
          images: [[1860, 279]],
          exitBranch: 4,
          branching: { branches: [{ frameIndex: 1, weight: 85 }] },
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Print: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 100, images: [[2852, 372]] },
        { duration: 100, images: [[2976, 372]] },
        { duration: 100, images: [[3100, 372]] },
        { duration: 100, images: [[0, 465]] },
        {
          duration: 100,
          images: [
            [248, 465],
            [124, 465],
          ],
          sound: "5",
        },
        {
          duration: 100,
          images: [
            [372, 465],
            [124, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [496, 465],
            [124, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 465],
          ],
          sound: "31",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 465],
          ],
        },
        {
          duration: 300,
          images: [
            [620, 465],
            [2108, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 465],
          ],
        },
        {
          duration: 200,
          images: [
            [620, 465],
            [2356, 465],
          ],
          exitBranch: 57,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 465],
          ],
          sound: "27",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 558],
          ],
          exitBranch: 57,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 558],
          ],
          exitBranch: 57,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 558],
          ],
          sound: "24",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 558],
          ],
          sound: "17",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 465],
          ],
          exitBranch: 57,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 465],
          ],
          sound: "27",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 558],
          ],
          exitBranch: 57,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 558],
          ],
        },
        {
          duration: 200,
          images: [
            [620, 465],
            [1364, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 558],
          ],
          exitBranch: 57,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 558],
          ],
          sound: "13",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 558],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 558],
          ],
          sound: "6",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 558],
          ],
        },
        {
          duration: 200,
          images: [
            [620, 465],
            [0, 651],
          ],
        },
        {
          duration: 200,
          images: [
            [496, 465],
            [124, 651],
          ],
        },
        {
          duration: 200,
          images: [
            [372, 465],
            [248, 651],
          ],
          sound: "26",
        },
        {
          duration: 100,
          images: [
            [248, 465],
            [0, 0],
          ],
          exitBranch: 72,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Hide: {
      frames: [
        { duration: 10, images: [[0, 0]] },
        { duration: 10, images: [[1488, 93]] },
        { duration: 10, images: [[1612, 93]] },
        { duration: 10, images: [[1736, 93]] },
        { duration: 10 },
      ],
    },
    GetAttention: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 100, images: [[372, 651]] },
        { duration: 100, images: [[496, 651]] },
        { duration: 100, images: [[620, 651]] },
        { duration: 100, images: [[744, 651]] },
        { duration: 100, images: [[868, 651]] },
        { duration: 100, images: [[992, 651]] },
        { duration: 100, images: [[1116, 651]] },
        { duration: 100, images: [[1240, 651]], sound: "12" },
        { duration: 100, images: [[1364, 651]] },
        { duration: 200, images: [[1488, 651]] },
        { duration: 100, images: [[1612, 651]], exitBranch: 23 },
        { duration: 100, images: [[1736, 651]] },
        { duration: 100, images: [[1860, 651]] },
        { duration: 100, images: [[1984, 651]] },
        { duration: 100, images: [[2108, 651]], sound: "21" },
        { duration: 100, images: [[2232, 651]] },
        { duration: 100, images: [[2356, 651]] },
        { duration: 100, images: [[2480, 651]] },
        { duration: 100, images: [[2604, 651]] },
        { duration: 100, images: [[2728, 651]] },
        { duration: 100, images: [[2852, 651]] },
        { duration: 200, images: [[1488, 651]], sound: "2" },
        { duration: 100, images: [[2976, 651]] },
        { duration: 100, images: [[3100, 651]] },
        { duration: 100, images: [[0, 744]], sound: "16" },
        { duration: 100, images: [[124, 744]] },
        { duration: 100, images: [[248, 744]] },
        { duration: 100, images: [[372, 744]] },
        { duration: 100, images: [[496, 744]], exitBranch: 30 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Alert: {
      frames: [
        { duration: 100, images: [[0, 0]], exitBranch: 15 },
        { duration: 100, images: [[0, 279]] },
        { duration: 100, images: [[124, 279]] },
        { duration: 100, images: [[248, 279]] },
        { duration: 100, images: [[372, 279]] },
        { duration: 100, images: [[496, 279]] },
        { duration: 100, images: [[620, 279]] },
        { duration: 100, images: [[744, 279]] },
        { duration: 100, images: [[868, 279]] },
        { duration: 500, images: [[992, 279]] },
        { duration: 100, images: [[1116, 279]], exitBranch: 11 },
        { duration: 100, images: [[1240, 279]] },
        { duration: 100, images: [[1364, 279]] },
        { duration: 100, images: [[1488, 279]] },
        { duration: 100, images: [[1612, 279]], exitBranch: 15 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    IdleHeadPatting: {
      frames: [
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 42,
          branching: { branches: [{ frameIndex: 0, weight: 80 }] },
        },
        { duration: 100, images: [[1736, 279]] },
        {
          duration: 100,
          images: [[1860, 279]],
          exitBranch: 42,
          branching: { branches: [{ frameIndex: 0, weight: 80 }] },
        },
        { duration: 100, images: [[1364, 744]] },
        { duration: 100, images: [[1488, 744]] },
        { duration: 100, images: [[1612, 744]] },
        { duration: 100, images: [[1736, 744]] },
        { duration: 100, images: [[1860, 744]] },
        { duration: 100, images: [[1984, 744]], exitBranch: 42 },
        { duration: 100, images: [[2108, 744]] },
        { duration: 100, images: [[2232, 744]] },
        { duration: 100, images: [[2356, 744]] },
        { duration: 100, images: [[2480, 744]] },
        { duration: 300, images: [[2604, 744]], exitBranch: 34 },
        { duration: 100, images: [[2728, 744]] },
        { duration: 100, images: [[2852, 744]] },
        { duration: 100, images: [[2976, 744]] },
        {
          duration: 300,
          images: [[3100, 744]],
          exitBranch: 34,
          branching: { branches: [{ frameIndex: 13, weight: 85 }] },
        },
        { duration: 100, images: [[0, 837]] },
        { duration: 100, images: [[124, 837]] },
        { duration: 100, images: [[248, 837]] },
        { duration: 300, images: [[372, 837]], exitBranch: 34 },
        { duration: 100, images: [[496, 837]] },
        { duration: 100, images: [[620, 837]] },
        { duration: 100, images: [[744, 837]] },
        {
          duration: 300,
          images: [[868, 837]],
          exitBranch: 34,
          branching: { branches: [{ frameIndex: 21, weight: 85 }] },
        },
        { duration: 100, images: [[992, 837]] },
        { duration: 100, images: [[1116, 837]] },
        { duration: 100, images: [[1240, 837]] },
        { duration: 100, images: [[1364, 837]] },
        { duration: 300, images: [[1488, 837]], exitBranch: 34 },
        { duration: 100, images: [[1612, 837]] },
        { duration: 100, images: [[1736, 837]] },
        {
          duration: 300,
          images: [[1860, 837]],
          exitBranch: 34,
          branching: {
            branches: [
              { frameIndex: 13, weight: 80 },
              { frameIndex: 17, weight: 10 },
            ],
          },
        },
        { duration: 100, images: [[1984, 837]] },
        { duration: 100, images: [[2108, 837]] },
        { duration: 100, images: [[2232, 837]] },
        { duration: 100, images: [[2356, 837]] },
        { duration: 100, images: [[2480, 837]] },
        { duration: 100, images: [[2604, 837]] },
        { duration: 100, images: [[2728, 837]] },
        { duration: 100, images: [[2852, 837]], exitBranch: 42 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GetTechy: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 60, images: [[2976, 837]] },
        { duration: 60, images: [[3100, 837]] },
        { duration: 60, images: [[0, 930]] },
        { duration: 60, images: [[124, 930]], sound: "8" },
        { duration: 60, images: [[248, 930]] },
        { duration: 60, images: [[372, 930]], exitBranch: 17 },
        { duration: 60, images: [[496, 930]] },
        { duration: 60, images: [[620, 930]], exitBranch: 17 },
        { duration: 60, images: [[744, 930]] },
        { duration: 60, images: [[868, 930]], exitBranch: 17 },
        { duration: 60, images: [[992, 930]] },
        { duration: 60, images: [[1116, 930]], exitBranch: 17 },
        { duration: 60, images: [[1240, 930]] },
        { duration: 60, images: [[1364, 930]], exitBranch: 17 },
        { duration: 60, images: [[1488, 930]], exitBranch: 17 },
        { duration: 60, images: [[1612, 930]] },
        { duration: 100, images: [[1736, 930]] },
        { duration: 100, images: [[1860, 930]] },
        { duration: 100, images: [[1984, 930]] },
        { duration: 100, images: [[2108, 930]], sound: "28" },
        { duration: 100, images: [[2232, 930]] },
        { duration: 100, images: [[2356, 930]] },
        { duration: 100, images: [[2480, 930]], sound: "28" },
        { duration: 100, images: [[2604, 930]], exitBranch: 28 },
        { duration: 100, images: [[2728, 930]] },
        {
          duration: 500,
          images: [[2852, 930]],
          exitBranch: 27,
          branching: { branches: [{ frameIndex: 26, weight: 85 }] },
        },
        {
          duration: 500,
          images: [[2976, 930]],
          exitBranch: 28,
          branching: {
            branches: [
              { frameIndex: 27, weight: 65 },
              { frameIndex: 26, weight: 35 },
            ],
          },
        },
        { duration: 100, images: [[3100, 930]], sound: "4" },
        { duration: 100, images: [[0, 1023]] },
        { duration: 100, images: [[124, 1023]] },
        { duration: 100, images: [[248, 1023]] },
        { duration: 100, images: [[372, 1023]] },
        { duration: 100, images: [[496, 1023]] },
        { duration: 100, images: [[620, 1023]] },
        { duration: 100, images: [[744, 1023]] },
        { duration: 100, images: [[868, 1023]] },
        { duration: 60, images: [[992, 1023]] },
        { duration: 60, images: [[1116, 1023]] },
        { duration: 60, images: [[1240, 1023]] },
        { duration: 60, images: [[1364, 1023]] },
        { duration: 60, images: [[1488, 1023]], sound: "28" },
        { duration: 330, images: [[124, 0]], exitBranch: 43 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GestureUp: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[620, 744]] },
        { duration: 100, images: [[744, 744]] },
        { duration: 100, images: [[868, 744]] },
        { duration: 400, images: [[992, 744]] },
        { duration: 100, images: [[1116, 744]] },
        { duration: 100, images: [[1240, 744]], exitBranch: 7 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Idle1_1: {
      frames: [
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 0, weight: 80 }] },
        },
        { duration: 100, images: [[1736, 279]] },
        {
          duration: 100,
          images: [[1860, 279]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 0, weight: 80 }] },
        },
        {
          duration: 0,
          branching: {
            branches: [
              { frameIndex: 44, weight: 30 },
              { frameIndex: 52, weight: 30 },
              { frameIndex: 59, weight: 30 },
            ],
          },
          exitBranch: 118,
        },
        {
          duration: 0,
          branching: { branches: [{ frameIndex: 75, weight: 50 }] },
          exitBranch: 118,
        },
        {
          duration: 100,
          images: [[1364, 744]],
          branching: { branches: [{ frameIndex: 118, weight: 50 }] },
        },
        { duration: 100, images: [[1488, 744]] },
        { duration: 100, images: [[1612, 744]] },
        { duration: 100, images: [[1736, 744]] },
        { duration: 100, images: [[1860, 744]] },
        { duration: 100, images: [[1984, 744]], exitBranch: 118 },
        { duration: 100, images: [[2108, 744]] },
        { duration: 100, images: [[2232, 744]] },
        { duration: 100, images: [[2356, 744]] },
        { duration: 100, images: [[2480, 744]] },
        { duration: 250, images: [[2604, 744]], exitBranch: 36 },
        { duration: 100, images: [[2728, 744]] },
        { duration: 100, images: [[2852, 744]] },
        { duration: 100, images: [[2976, 744]] },
        {
          duration: 250,
          images: [[3100, 744]],
          exitBranch: 36,
          branching: { branches: [{ frameIndex: 16, weight: 85 }] },
        },
        { duration: 100, images: [[0, 837]] },
        { duration: 100, images: [[124, 837]] },
        { duration: 100, images: [[248, 837]] },
        { duration: 250, images: [[372, 837]], exitBranch: 36 },
        { duration: 100, images: [[496, 837]] },
        { duration: 100, images: [[620, 837]] },
        { duration: 100, images: [[744, 837]] },
        {
          duration: 250,
          images: [[868, 837]],
          exitBranch: 36,
          branching: { branches: [{ frameIndex: 24, weight: 85 }] },
        },
        { duration: 100, images: [[992, 837]] },
        { duration: 100, images: [[1116, 837]] },
        { duration: 100, images: [[1240, 837]] },
        { duration: 100, images: [[1364, 837]] },
        { duration: 250, images: [[1488, 837]], exitBranch: 36 },
        { duration: 100, images: [[1612, 837]] },
        { duration: 100, images: [[1736, 837]] },
        {
          duration: 250,
          images: [[1860, 837]],
          exitBranch: 36,
          branching: {
            branches: [
              { frameIndex: 16, weight: 80 },
              { frameIndex: 20, weight: 10 },
            ],
          },
        },
        { duration: 100, images: [[1984, 837]] },
        { duration: 100, images: [[2108, 837]] },
        { duration: 100, images: [[2232, 837]] },
        { duration: 100, images: [[2356, 837]] },
        { duration: 100, images: [[2480, 837]] },
        { duration: 100, images: [[2604, 837]] },
        { duration: 100, images: [[2728, 837]] },
        {
          duration: 100,
          images: [[2852, 837]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 118, weight: 100 }] },
        },
        {
          duration: 0,
          branching: { branches: [{ frameIndex: 118, weight: 30 }] },
          exitBranch: 118,
        },
        { duration: 100, images: [[0, 0]] },
        { duration: 330, images: [[620, 744]], exitBranch: 118 },
        { duration: 100, images: [[744, 744]] },
        {
          duration: 450,
          images: [[868, 744]],
          exitBranch: 49,
          branching: { branches: [{ frameIndex: 48, weight: 75 }] },
        },
        { duration: 100, images: [[992, 744]] },
        {
          duration: 100,
          images: [[1116, 744]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 48, weight: 65 }] },
        },
        {
          duration: 100,
          images: [[1240, 744]],
          exitBranch: 118,
          branching: {
            branches: [
              { frameIndex: 48, weight: 30 },
              { frameIndex: 0, weight: 50 },
              { frameIndex: 118, weight: 20 },
            ],
          },
        },
        {
          duration: 0,
          branching: { branches: [{ frameIndex: 118, weight: 10 }] },
          exitBranch: 118,
        },
        {
          duration: 100,
          images: [[0, 0]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 53, weight: 50 }] },
        },
        { duration: 100, images: [[1612, 1023]] },
        { duration: 100, images: [[1736, 1023]] },
        {
          duration: 330,
          images: [[1860, 1023]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 56, weight: 90 }] },
        },
        { duration: 100, images: [[1984, 1023]] },
        { duration: 100, images: [[2108, 1023]] },
        {
          duration: 100,
          images: [[2232, 1023]],
          exitBranch: 118,
          branching: {
            branches: [
              { frameIndex: 56, weight: 85 },
              { frameIndex: 0, weight: 10 },
              { frameIndex: 118, weight: 5 },
            ],
          },
        },
        {
          duration: 0,
          branching: { branches: [{ frameIndex: 118, weight: 80 }] },
          exitBranch: 118,
        },
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 61, weight: 50 }] },
        },
        { duration: 100, images: [[1736, 279]] },
        {
          duration: 100,
          images: [[1860, 279]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 61, weight: 50 }] },
        },
        { duration: 100, images: [[1984, 279]], exitBranch: 74 },
        { duration: 100, images: [[2108, 279]] },
        { duration: 100, images: [[2232, 279]] },
        { duration: 100, images: [[2356, 279]] },
        { duration: 100, images: [[2480, 279]] },
        { duration: 100, images: [[2604, 279]] },
        { duration: 100, images: [[2728, 279]] },
        { duration: 100, images: [[2852, 279]] },
        { duration: 100, images: [[2976, 279]] },
        { duration: 100, images: [[3100, 279]] },
        { duration: 100, images: [[0, 372]] },
        {
          duration: 330,
          images: [[124, 0]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 118, weight: 100 }] },
        },
        {
          duration: 0,
          branching: { branches: [{ frameIndex: 118, weight: 85 }] },
          exitBranch: 118,
        },
        { duration: 100, images: [[2356, 1023]] },
        { duration: 100, images: [[2480, 1023]] },
        { duration: 100, images: [[2604, 1023]] },
        { duration: 100, images: [[2728, 1023]] },
        { duration: 100, images: [[2852, 1023]] },
        { duration: 100, images: [[2976, 1023]] },
        { duration: 100, images: [[3100, 1023]] },
        { duration: 100, images: [[0, 1116]] },
        { duration: 100, images: [[124, 1116]], exitBranch: 109 },
        { duration: 100, images: [[248, 1116]] },
        { duration: 100, images: [[372, 1116]], exitBranch: 109 },
        { duration: 100, images: [[496, 1116]] },
        { duration: 500, images: [[124, 1116]], exitBranch: 109 },
        { duration: 100, images: [[248, 1116]] },
        { duration: 100, images: [[372, 1116]], exitBranch: 109 },
        { duration: 100, images: [[496, 1116]] },
        {
          duration: 500,
          images: [[124, 1116]],
          exitBranch: 109,
          branching: { branches: [{ frameIndex: 90, weight: 80 }] },
        },
        { duration: 100, images: [[620, 1116]] },
        { duration: 100, images: [[744, 1116]], exitBranch: 109 },
        { duration: 100, images: [[868, 1116]] },
        { duration: 100, images: [[992, 1116]], exitBranch: 109 },
        { duration: 400, images: [[1116, 1116]] },
        { duration: 100, images: [[1240, 1116]], exitBranch: 109 },
        { duration: 100, images: [[1364, 1116]] },
        { duration: 100, images: [[1488, 1116]], exitBranch: 109 },
        {
          duration: 500,
          images: [[1116, 1116]],
          exitBranch: 109,
          branching: { branches: [{ frameIndex: 99, weight: 80 }] },
        },
        { duration: 100, images: [[1612, 1116]], exitBranch: 109 },
        { duration: 100, images: [[1736, 1116]] },
        { duration: 100, images: [[1860, 1116]], exitBranch: 109 },
        { duration: 100, images: [[1984, 1116]] },
        {
          duration: 200,
          images: [[2108, 1116]],
          exitBranch: 108,
          branching: { branches: [{ frameIndex: 93, weight: 85 }] },
        },
        { duration: 100, images: [[2232, 1116]] },
        { duration: 100, images: [[2356, 1116]] },
        { duration: 100, images: [[2480, 1116]] },
        { duration: 300, images: [[2604, 1116]] },
        { duration: 100, images: [[2728, 1116]] },
        { duration: 100, images: [[2852, 1116]] },
        { duration: 100, images: [[2976, 1116]] },
        { duration: 100, images: [[3100, 1116]] },
        { duration: 100, images: [[0, 1209]] },
        {
          duration: 100,
          images: [[124, 1209]],
          exitBranch: 118,
          branching: { branches: [{ frameIndex: 118, weight: 100 }] },
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Processing: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 80, images: [[248, 1209]] },
        { duration: 80, images: [[372, 1209]], sound: "25" },
        { duration: 80, images: [[496, 1209]] },
        { duration: 80, images: [[620, 1209]] },
        { duration: 330, images: [[744, 1209]] },
        { duration: 80, images: [[868, 1209]] },
        { duration: 80, images: [[992, 1209]] },
        { duration: 80, images: [[1116, 1209]] },
        { duration: 80, images: [[1240, 1209]] },
        { duration: 400, images: [[1364, 1209]] },
        { duration: 80, images: [[1488, 1209]] },
        { duration: 80, images: [[1612, 1209]] },
        { duration: 80, images: [[1736, 1209]] },
        { duration: 80, images: [[1860, 1209]] },
        {
          duration: 400,
          images: [[1984, 1209]],
          exitBranch: 34,
          branching: {
            branches: [
              { frameIndex: 10, weight: 33 },
              { frameIndex: 5, weight: 33 },
            ],
          },
        },
        { duration: 80, images: [[2108, 1209]], exitBranch: 34 },
        { duration: 80, images: [[2232, 1209]] },
        { duration: 80, images: [[2356, 1209]], exitBranch: 34 },
        { duration: 80, images: [[2480, 1209]] },
        { duration: 80, images: [[2604, 1209]], exitBranch: 34 },
        { duration: 80, images: [[2728, 1209]] },
        { duration: 80, images: [[2852, 1209]], exitBranch: 34 },
        { duration: 80, images: [[2976, 1209]] },
        { duration: 80, images: [[3100, 1209]], exitBranch: 34 },
        { duration: 80, images: [[2108, 1209]] },
        { duration: 80, images: [[2232, 1209]], exitBranch: 34 },
        { duration: 80, images: [[2356, 1209]] },
        { duration: 80, images: [[2480, 1209]], exitBranch: 34 },
        { duration: 80, images: [[2604, 1209]] },
        { duration: 80, images: [[2728, 1209]], exitBranch: 34 },
        { duration: 80, images: [[2852, 1209]] },
        { duration: 80, images: [[2976, 1209]], exitBranch: 34 },
        { duration: 80, images: [[3100, 1209]] },
        {
          duration: 80,
          images: [[0, 1302]],
          exitBranch: 35,
          branching: {
            branches: [
              { frameIndex: 5, weight: 33 },
              { frameIndex: 10, weight: 33 },
              { frameIndex: 15, weight: 34 },
            ],
          },
        },
        { duration: 80, images: [[124, 0]], exitBranch: 36 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Hearing_1: {
      frames: [
        { duration: 100, images: [[0, 0]], exitBranch: 15 },
        { duration: 100, images: [[0, 279]] },
        { duration: 100, images: [[124, 279]] },
        { duration: 100, images: [[248, 279]] },
        { duration: 100, images: [[372, 279]] },
        { duration: 100, images: [[496, 279]] },
        { duration: 100, images: [[620, 279]] },
        { duration: 100, images: [[744, 279]] },
        { duration: 100, images: [[868, 279]] },
        { duration: 500, images: [[992, 279]] },
        {
          duration: 100,
          images: [[1116, 279]],
          exitBranch: 11,
          branching: { branches: [{ frameIndex: 10, weight: 100 }] },
        },
        { duration: 100, images: [[1240, 279]] },
        { duration: 100, images: [[1364, 279]] },
        { duration: 100, images: [[1488, 279]] },
        { duration: 100, images: [[1612, 279]], exitBranch: 15 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookUpRight: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[620, 744]] },
        { duration: 100, images: [[744, 744]] },
        { duration: 100, images: [[868, 744]] },
        { duration: 400, images: [[992, 744]] },
        { duration: 100, images: [[1116, 744]] },
        { duration: 100, images: [[1240, 744]], exitBranch: 7 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    SendMail: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 100, images: [[124, 1302]] },
        { duration: 100, images: [[248, 1302]] },
        { duration: 100, images: [[372, 1302]] },
        { duration: 100, images: [[496, 1302]] },
        { duration: 100, images: [[620, 1302]], sound: "8" },
        {
          duration: 100,
          images: [
            [248, 465],
            [744, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [372, 465],
            [744, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [496, 465],
            [744, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 1302],
          ],
          sound: "6",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 1302],
          ],
          exitBranch: 40,
          sound: "18",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 1302],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 1302],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 1302],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 1302],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 1302],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 1302],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 1395],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 1395],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 1395],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 1395],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 1395],
          ],
          exitBranch: 40,
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 1395],
          ],
          sound: "1",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [496, 465],
            [2480, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [372, 465],
            [2604, 1395],
          ],
        },
        {
          duration: 100,
          images: [
            [248, 465],
            [2728, 1395],
          ],
          exitBranch: 52,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookLeft: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[0, 1767]] },
        { duration: 100, images: [[124, 1767]] },
        { duration: 100, images: [[248, 1767]] },
        { duration: 100, images: [[372, 1767]] },
        { duration: 100, images: [[496, 1767]] },
        { duration: 400, images: [[620, 1767]] },
        { duration: 100, images: [[744, 1767]] },
        { duration: 100, images: [[868, 1767]], exitBranch: 9 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookUpLeft: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[0, 1767]] },
        { duration: 100, images: [[124, 1767]] },
        { duration: 100, images: [[248, 1767]] },
        { duration: 100, images: [[372, 1767]] },
        { duration: 100, images: [[496, 1767]] },
        { duration: 400, images: [[620, 1767]] },
        { duration: 100, images: [[744, 1767]] },
        { duration: 100, images: [[868, 1767]], exitBranch: 9 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    CheckingSomething: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 100, images: [[2852, 1395]] },
        { duration: 100, images: [[2976, 1395]] },
        { duration: 100, images: [[3100, 1395]] },
        { duration: 100, images: [[0, 1488]] },
        { duration: 100, images: [[124, 1488]], sound: "5" },
        { duration: 100, images: [[248, 1488]] },
        { duration: 100, images: [[372, 1488]] },
        { duration: 100, images: [[496, 1488]] },
        { duration: 100, images: [[620, 1488]] },
        { duration: 100, images: [[744, 1488]] },
        { duration: 100, images: [[868, 1488]] },
        { duration: 100, images: [[992, 1488]] },
        { duration: 100, images: [[1116, 1488]], exitBranch: 66 },
        { duration: 100, images: [[1240, 1488]] },
        { duration: 100, images: [[1364, 1488]] },
        { duration: 100, images: [[1488, 1488]] },
        { duration: 100, images: [[1612, 1488]] },
        { duration: 100, images: [[1736, 1488]], exitBranch: 66 },
        { duration: 100, images: [[1860, 1488]] },
        { duration: 100, images: [[1984, 1488]] },
        { duration: 100, images: [[2108, 1488]] },
        { duration: 100, images: [[2232, 1488]] },
        { duration: 100, images: [[2356, 1488]] },
        { duration: 100, images: [[2480, 1488]] },
        { duration: 100, images: [[2604, 1488]] },
        { duration: 100, images: [[2728, 1488]], exitBranch: 66 },
        { duration: 100, images: [[2852, 1488]] },
        { duration: 100, images: [[2976, 1488]] },
        { duration: 100, images: [[3100, 1488]] },
        { duration: 100, images: [[0, 1581]] },
        { duration: 100, images: [[124, 1581]], exitBranch: 66 },
        { duration: 100, images: [[248, 1581]] },
        { duration: 100, images: [[372, 1581]] },
        { duration: 100, images: [[496, 1581]] },
        { duration: 100, images: [[620, 1581]] },
        { duration: 100, images: [[744, 1581]] },
        { duration: 100, images: [[868, 1581]], exitBranch: 66 },
        { duration: 100, images: [[992, 1581]] },
        { duration: 100, images: [[1116, 1581]] },
        {
          duration: 100,
          images: [[1240, 1581]],
          branching: { branches: [{ frameIndex: 16, weight: 100 }] },
        },
        { duration: 100, images: [[1364, 1581]] },
        { duration: 100, images: [[1488, 1581]] },
        { duration: 100, images: [[1612, 1581]] },
        { duration: 100, images: [[1736, 1581]] },
        { duration: 330, images: [[1860, 1581]] },
        { duration: 100, images: [[1984, 1581]], exitBranch: 66 },
        { duration: 100, images: [[2108, 1581]] },
        { duration: 100, images: [[2232, 1581]], sound: "27" },
        { duration: 100, images: [[2356, 1581]] },
        { duration: 100, images: [[2480, 1581]] },
        { duration: 100, images: [[2604, 1581]] },
        { duration: 100, images: [[2728, 1581]] },
        { duration: 100, images: [[2852, 1581]] },
        { duration: 100, images: [[2976, 1581]] },
        { duration: 100, images: [[3100, 1581]] },
        { duration: 100, images: [[0, 1674]] },
        { duration: 100, images: [[124, 1674]] },
        { duration: 100, images: [[248, 1674]], sound: "17" },
        { duration: 100, images: [[372, 1674]] },
        { duration: 100, images: [[496, 1674]] },
        { duration: 100, images: [[620, 1674]], sound: "24" },
        { duration: 100, images: [[744, 1674]] },
        { duration: 100, images: [[868, 1674]] },
        { duration: 100, images: [[992, 1674]] },
        { duration: 100, images: [[1116, 1674]] },
        {
          duration: 100,
          images: [
            [248, 465],
            [1240, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [372, 465],
            [1240, 1674],
          ],
          sound: "7",
        },
        {
          duration: 100,
          images: [
            [496, 465],
            [1240, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 1674],
          ],
          sound: "13",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [496, 465],
            [2480, 1674],
          ],
        },
        {
          duration: 100,
          images: [
            [372, 465],
            [2604, 1674],
          ],
          sound: "28",
        },
        {
          duration: 100,
          images: [
            [248, 465],
            [2728, 1674],
          ],
        },
        { duration: 100, images: [[2852, 1674]] },
        { duration: 100, images: [[2976, 1674]] },
        { duration: 100, images: [[3100, 1674]], exitBranch: 86 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Save: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 100, images: [[124, 372]], sound: "31" },
        { duration: 100, images: [[248, 372]] },
        { duration: 100, images: [[372, 372]] },
        { duration: 100, images: [[496, 372]] },
        { duration: 100, images: [[620, 372]], exitBranch: 11, sound: "3" },
        { duration: 100, images: [[744, 372]] },
        { duration: 100, images: [[868, 372]], exitBranch: 11, sound: "9" },
        { duration: 100, images: [[992, 372]] },
        { duration: 100, images: [[1116, 372]], exitBranch: 11 },
        { duration: 100, images: [[1240, 372]], sound: "9" },
        { duration: 100, images: [[1364, 372]] },
        { duration: 100, images: [[1488, 372]] },
        { duration: 100, images: [[1612, 372]] },
        { duration: 100, images: [[1736, 372]] },
        { duration: 100, images: [[1860, 372]] },
        { duration: 100, images: [[1984, 372]] },
        { duration: 100, images: [[2108, 372]] },
        { duration: 1000, images: [[2232, 372]] },
        { duration: 100, images: [[2356, 372]], sound: "15" },
        { duration: 100, images: [[2480, 372]] },
        { duration: 100, images: [[2604, 372]] },
        { duration: 100, images: [[2728, 372]], exitBranch: 23 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GetWizardy: {
      frames: [
        {
          duration: 100,
          images: [[0, 0]],
          exitBranch: 39,
          sound: "29",
          branching: { branches: [{ frameIndex: 19, weight: 50 }] },
        },
        { duration: 100, images: [[992, 1767]], sound: "22" },
        { duration: 100, images: [[1116, 1767]] },
        { duration: 100, images: [[1240, 1767]] },
        { duration: 100, images: [[1364, 1767]], exitBranch: 15 },
        { duration: 100, images: [[1488, 1767]], sound: "15" },
        { duration: 100, images: [[1612, 1767]], exitBranch: 15 },
        { duration: 100, images: [[1736, 1767]] },
        { duration: 100, images: [[1860, 1767]], exitBranch: 15 },
        { duration: 100, images: [[1984, 1767]] },
        { duration: 100, images: [[2108, 1767]], exitBranch: 15 },
        { duration: 100, images: [[2232, 1767]] },
        {
          duration: 100,
          images: [[2356, 1767]],
          exitBranch: 15,
          branching: { branches: [{ frameIndex: 4, weight: 30 }] },
        },
        { duration: 100, images: [[2480, 1767]] },
        { duration: 100, images: [[2604, 1767]] },
        { duration: 100, images: [[2728, 1767]] },
        { duration: 100, images: [[2852, 1767]] },
        { duration: 100, images: [[2976, 1767]] },
        {
          duration: 100,
          images: [[3100, 1767]],
          exitBranch: 39,
          branching: { branches: [{ frameIndex: 39, weight: 100 }] },
        },
        { duration: 100, images: [[0, 1860]] },
        { duration: 100, images: [[124, 1860]] },
        { duration: 100, images: [[248, 1860]] },
        { duration: 100, images: [[372, 1860]], sound: "20" },
        { duration: 100, images: [[496, 1860]] },
        { duration: 100, images: [[620, 1860]] },
        { duration: 100, images: [[744, 1860]] },
        { duration: 100, images: [[868, 1860]] },
        { duration: 100, images: [[992, 1860]] },
        { duration: 100, images: [[1116, 1860]] },
        { duration: 100, images: [[1240, 1860]] },
        { duration: 100, images: [[1364, 1860]] },
        { duration: 100, images: [[1488, 1860]] },
        { duration: 100, images: [[1612, 1860]] },
        { duration: 100, images: [[1736, 1860]] },
        { duration: 100, images: [[1860, 1860]] },
        { duration: 100, images: [[1984, 1860]] },
        { duration: 100, images: [[2108, 1860]] },
        { duration: 100, images: [[2232, 1860]] },
        { duration: 100, images: [[2356, 1860]], exitBranch: 39 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    IdleBlinkWithBrows: {
      frames: [
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 6,
          branching: { branches: [{ frameIndex: 0, weight: 90 }] },
        },
        { duration: 100, images: [[2356, 186]] },
        { duration: 100, images: [[2480, 186]] },
        { duration: 100, images: [[2604, 186]] },
        { duration: 100, images: [[2728, 186]] },
        { duration: 100, images: [[2604, 186]], exitBranch: 7 },
        {
          duration: 100,
          images: [[2480, 186]],
          exitBranch: 7,
          branching: { branches: [{ frameIndex: 0, weight: 85 }] },
        },
        { duration: 500, images: [[0, 0]] },
      ],
    },
    GestureLeft: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 330,
          images: [[0, 1767]],
          exitBranch: 2,
          branching: { branches: [{ frameIndex: 1, weight: 60 }] },
        },
        { duration: 100, images: [[124, 1767]] },
        { duration: 100, images: [[248, 1767]] },
        {
          duration: 500,
          images: [[372, 1767]],
          exitBranch: 5,
          branching: { branches: [{ frameIndex: 4, weight: 60 }] },
        },
        {
          duration: 100,
          images: [[496, 1767]],
          exitBranch: 6,
          branching: { branches: [{ frameIndex: 4, weight: 70 }] },
        },
        { duration: 400, images: [[620, 1767]] },
        { duration: 100, images: [[744, 1767]] },
        {
          duration: 100,
          images: [[868, 1767]],
          exitBranch: 9,
          branching: { branches: [{ frameIndex: 1, weight: 40 }] },
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Wave: {
      frames: [
        {
          duration: 100,
          images: [[0, 0]],
          exitBranch: 47,
          sound: "29",
          branching: { branches: [{ frameIndex: 29, weight: 50 }] },
        },
        { duration: 100, images: [[2480, 1860]] },
        { duration: 100, images: [[2604, 1860]] },
        { duration: 100, images: [[2728, 1860]], exitBranch: 8 },
        { duration: 100, images: [[2852, 1860]] },
        { duration: 100, images: [[2976, 1860]], exitBranch: 8 },
        { duration: 100, images: [[3100, 1860]] },
        { duration: 100, images: [[0, 1953]] },
        { duration: 100, images: [[124, 1953]] },
        { duration: 100, images: [[248, 1953]] },
        { duration: 100, images: [[372, 1953]] },
        { duration: 100, images: [[496, 1953]] },
        { duration: 100, images: [[620, 1953]] },
        { duration: 100, images: [[744, 1953]], sound: "20" },
        { duration: 100, images: [[868, 1953]] },
        { duration: 100, images: [[992, 1953]] },
        { duration: 100, images: [[1116, 1953]] },
        { duration: 100, images: [[1240, 1953]] },
        { duration: 100, images: [[1364, 1953]] },
        { duration: 100, images: [[1488, 1953]] },
        { duration: 100, images: [[1612, 1953]] },
        { duration: 100, images: [[1736, 1953]] },
        { duration: 100, images: [[1860, 1953]] },
        { duration: 100, images: [[1984, 1953]] },
        { duration: 100, images: [[2108, 1953]] },
        { duration: 100, images: [[2232, 1953]] },
        { duration: 100, images: [[2356, 1953]] },
        { duration: 100, images: [[2480, 1953]] },
        {
          duration: 100,
          images: [[2604, 1953]],
          exitBranch: 47,
          branching: { branches: [{ frameIndex: 47, weight: 100 }] },
        },
        { duration: 100, images: [[992, 1767]], sound: "22" },
        { duration: 100, images: [[1116, 1767]] },
        { duration: 100, images: [[1240, 1767]] },
        { duration: 100, images: [[1364, 1767]] },
        { duration: 100, images: [[1488, 1767]], sound: "15" },
        { duration: 100, images: [[1612, 1767]] },
        { duration: 100, images: [[1736, 1767]] },
        { duration: 100, images: [[1860, 1767]] },
        { duration: 100, images: [[1984, 1767]] },
        { duration: 100, images: [[2108, 1767]] },
        { duration: 100, images: [[2232, 1767]] },
        {
          duration: 100,
          images: [[2356, 1767]],
          exitBranch: 41,
          branching: { branches: [{ frameIndex: 3, weight: 30 }] },
        },
        { duration: 100, images: [[2480, 1767]] },
        { duration: 100, images: [[2604, 1767]] },
        { duration: 100, images: [[2728, 1767]] },
        { duration: 100, images: [[2852, 1767]] },
        { duration: 100, images: [[2976, 1767]] },
        { duration: 100, images: [[3100, 1767]], exitBranch: 47 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Goodbye: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        {
          duration: 100,
          images: [
            [2728, 1953],
            [248, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [2728, 1953],
            [372, 465],
          ],
          sound: "7",
        },
        {
          duration: 100,
          images: [
            [2728, 1953],
            [496, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 0],
          ],
          exitBranch: 60,
          branching: {
            branches: [
              { frameIndex: 20, weight: 33 },
              { frameIndex: 60, weight: 33 },
            ],
          },
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 1953],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 1953],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 1953],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 2046],
          ],
          sound: "5",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 2046],
          ],
          sound: "23",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 2046],
          ],
          sound: "5",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 2046],
          ],
          sound: "26",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 2046],
          ],
          exitBranch: 129,
          branching: { branches: [{ frameIndex: 129, weight: 100 }] },
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 2046],
          ],
          sound: "31",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 2046],
          ],
          sound: "16",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 2046],
          ],
        },
        {
          duration: 100,
          images: [
            [496, 465],
            [0, 2139],
          ],
          sound: "15",
        },
        {
          duration: 100,
          images: [
            [372, 465],
            [124, 2139],
          ],
          sound: "8",
        },
        {
          duration: 100,
          images: [
            [248, 465],
            [248, 2139],
          ],
        },
        { duration: 100, images: [[372, 2139]] },
        { duration: 100, images: [[496, 2139]] },
        { duration: 100, images: [[620, 2139]], sound: "25" },
        { duration: 100, images: [[744, 2139]] },
        { duration: 100, images: [[868, 2139]] },
        { duration: 100, images: [[992, 2139]] },
        { duration: 100, images: [[1116, 2139]] },
        { duration: 100, images: [[1240, 2139]] },
        { duration: 100, images: [[1364, 2139]] },
        { duration: 100, images: [[1488, 2139]] },
        { duration: 100, images: [[1612, 2139]], sound: "14" },
        { duration: 100, images: [[1736, 2139]] },
        { duration: 100, images: [[1860, 2139]] },
        { duration: 100, images: [[1984, 2139]] },
        { duration: 100, images: [[2108, 2139]] },
        { duration: 100, images: [[2232, 2139]] },
        { duration: 100, images: [[2356, 2139]] },
        { duration: 100, images: [[2480, 2139]] },
        { duration: 100, images: [[2604, 2139]] },
        { duration: 100, images: [[2728, 2139]] },
        { duration: 100, images: [[2852, 2139]] },
        { duration: 100, images: [[2976, 2139]] },
        {
          duration: 100,
          images: [[3100, 2139]],
          exitBranch: 129,
          branching: { branches: [{ frameIndex: 129, weight: 100 }] },
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 2232],
          ],
        },
        {
          duration: 200,
          images: [
            [620, 465],
            [1240, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 2232],
          ],
          sound: "5",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 2232],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 2325],
          ],
          sound: "23",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 2325],
          ],
          sound: "10",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 2325],
          ],
          sound: "10",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 2325],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 2418],
          ],
          sound: "11",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 2418],
          ],
          sound: "22",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 2418],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 2418],
          ],
        },
        { duration: 100, images: [[620, 465]] },
        { duration: 100, images: [[496, 465]] },
        { duration: 100, images: [[372, 465]], sound: "7" },
        { duration: 100, images: [[248, 465]], exitBranch: 129 },
        { duration: 50 },
      ],
    },
    GestureRight: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 330,
          images: [[620, 744]],
          exitBranch: 2,
          branching: { branches: [{ frameIndex: 1, weight: 85 }] },
        },
        { duration: 100, images: [[744, 744]] },
        {
          duration: 330,
          images: [[868, 744]],
          exitBranch: 4,
          branching: { branches: [{ frameIndex: 3, weight: 75 }] },
        },
        { duration: 100, images: [[992, 744]] },
        {
          duration: 100,
          images: [[1116, 744]],
          exitBranch: 6,
          branching: { branches: [{ frameIndex: 4, weight: 65 }] },
        },
        {
          duration: 100,
          images: [[1240, 744]],
          exitBranch: 7,
          branching: { branches: [{ frameIndex: 1, weight: 40 }] },
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    IdleLeansAgainstWall: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[1612, 2418]] },
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 46,
          branching: { branches: [{ frameIndex: 2, weight: 80 }] },
        },
        { duration: 100, images: [[1736, 279]] },
        {
          duration: 100,
          images: [[1860, 279]],
          exitBranch: 46,
          branching: { branches: [{ frameIndex: 2, weight: 80 }] },
        },
        { duration: 100, images: [[2356, 1023]] },
        { duration: 100, images: [[2480, 1023]] },
        { duration: 100, images: [[2604, 1023]] },
        { duration: 100, images: [[2728, 1023]] },
        { duration: 100, images: [[2852, 1023]] },
        { duration: 100, images: [[2976, 1023]] },
        { duration: 100, images: [[3100, 1023]] },
        { duration: 100, images: [[0, 1116]] },
        { duration: 100, images: [[124, 1116]], exitBranch: 37 },
        { duration: 100, images: [[248, 1116]] },
        { duration: 100, images: [[372, 1116]], exitBranch: 37 },
        { duration: 100, images: [[496, 1116]] },
        { duration: 500, images: [[124, 1116]], exitBranch: 37 },
        { duration: 100, images: [[248, 1116]] },
        { duration: 100, images: [[372, 1116]], exitBranch: 37 },
        { duration: 100, images: [[496, 1116]] },
        {
          duration: 500,
          images: [[124, 1116]],
          exitBranch: 37,
          branching: { branches: [{ frameIndex: 13, weight: 80 }] },
        },
        { duration: 100, images: [[620, 1116]] },
        { duration: 100, images: [[744, 1116]], exitBranch: 37 },
        { duration: 100, images: [[868, 1116]] },
        { duration: 100, images: [[992, 1116]], exitBranch: 37 },
        { duration: 400, images: [[1116, 1116]] },
        { duration: 100, images: [[1240, 1116]], exitBranch: 37 },
        { duration: 100, images: [[1364, 1116]] },
        { duration: 100, images: [[1488, 1116]], exitBranch: 37 },
        {
          duration: 500,
          images: [[1116, 1116]],
          exitBranch: 31,
          branching: { branches: [{ frameIndex: 27, weight: 80 }] },
        },
        { duration: 100, images: [[1612, 1116]], exitBranch: 37 },
        { duration: 100, images: [[1736, 1116]] },
        { duration: 100, images: [[1860, 1116]], exitBranch: 37 },
        { duration: 100, images: [[1984, 1116]] },
        {
          duration: 200,
          images: [[2108, 1116]],
          exitBranch: 37,
          branching: { branches: [{ frameIndex: 13, weight: 85 }] },
        },
        { duration: 100, images: [[2232, 1116]] },
        { duration: 100, images: [[2356, 1116]] },
        { duration: 100, images: [[2480, 1116]] },
        { duration: 300, images: [[2604, 1116]] },
        { duration: 100, images: [[2728, 1116]] },
        { duration: 100, images: [[2852, 1116]] },
        { duration: 100, images: [[2976, 1116]] },
        { duration: 100, images: [[3100, 1116]] },
        { duration: 100, images: [[0, 1209]] },
        { duration: 100, images: [[124, 1209]], exitBranch: 46 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    IdleLooksAtUser: {
      frames: [
        {
          duration: 100,
          images: [[0, 0]],
          exitBranch: 7,
          branching: { branches: [{ frameIndex: 0, weight: 50 }] },
        },
        { duration: 100, images: [[1612, 1023]] },
        { duration: 100, images: [[1736, 1023]] },
        {
          duration: 330,
          images: [[1860, 1023]],
          exitBranch: 7,
          branching: { branches: [{ frameIndex: 3, weight: 90 }] },
        },
        { duration: 100, images: [[1984, 1023]] },
        { duration: 100, images: [[2108, 1023]] },
        { duration: 100, images: [[2232, 1023]], exitBranch: 7 },
        {
          duration: 500,
          images: [[1736, 2418]],
          branching: {
            branches: [
              { frameIndex: 7, weight: 85 },
              { frameIndex: 3, weight: 14 },
            ],
          },
        },
      ],
    },
    IdleLookRight: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 330,
          images: [[620, 744]],
          exitBranch: 7,
          branching: { branches: [{ frameIndex: 1, weight: 85 }] },
        },
        { duration: 100, images: [[744, 744]] },
        {
          duration: 330,
          images: [[868, 744]],
          exitBranch: 4,
          branching: { branches: [{ frameIndex: 3, weight: 75 }] },
        },
        { duration: 100, images: [[992, 744]] },
        {
          duration: 100,
          images: [[1116, 744]],
          exitBranch: 7,
          branching: { branches: [{ frameIndex: 4, weight: 65 }] },
        },
        {
          duration: 100,
          images: [[1240, 744]],
          exitBranch: 7,
          branching: { branches: [{ frameIndex: 1, weight: 40 }] },
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    IdleFallsAsleep: {
      frames: [
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 58,
          branching: { branches: [{ frameIndex: 0, weight: 80 }] },
        },
        { duration: 100, images: [[1736, 279]] },
        {
          duration: 100,
          images: [[1860, 279]],
          exitBranch: 58,
          branching: { branches: [{ frameIndex: 0, weight: 80 }] },
        },
        { duration: 100, images: [[1860, 2418]] },
        { duration: 100, images: [[1984, 2418]], exitBranch: 58 },
        { duration: 100, images: [[2108, 2418]] },
        { duration: 100, images: [[2232, 2418]], exitBranch: 58 },
        { duration: 100, images: [[2356, 2418]] },
        { duration: 100, images: [[2480, 2418]], exitBranch: 58 },
        { duration: 100, images: [[2604, 2418]] },
        { duration: 100, images: [[2728, 372]], exitBranch: 58 },
        { duration: 100, images: [[2728, 2418]] },
        { duration: 100, images: [[2604, 372]], exitBranch: 58 },
        { duration: 100, images: [[2480, 372]] },
        { duration: 100, images: [[2852, 2418]], exitBranch: 58 },
        { duration: 100, images: [[2976, 2418]] },
        { duration: 100, images: [[3100, 2418]], exitBranch: 28 },
        { duration: 100, images: [[0, 2511]] },
        { duration: 100, images: [[124, 2511]], exitBranch: 28 },
        { duration: 100, images: [[248, 2511]] },
        { duration: 100, images: [[372, 2511]], exitBranch: 28 },
        { duration: 100, images: [[496, 2511]] },
        { duration: 100, images: [[620, 2511]], exitBranch: 28 },
        { duration: 100, images: [[744, 2511]] },
        {
          duration: 500,
          images: [[868, 2511]],
          exitBranch: 28,
          branching: { branches: [{ frameIndex: 24, weight: 65 }] },
        },
        {
          duration: 500,
          images: [[2356, 372]],
          exitBranch: 28,
          branching: { branches: [{ frameIndex: 25, weight: 50 }] },
        },
        { duration: 100, images: [[992, 2511]], exitBranch: 28 },
        {
          duration: 500,
          images: [[1116, 2511]],
          exitBranch: 28,
          branching: {
            branches: [
              { frameIndex: 24, weight: 50 },
              { frameIndex: 27, weight: 25 },
            ],
          },
        },
        { duration: 100, images: [[1240, 2511]] },
        { duration: 100, images: [[1364, 2511]] },
        { duration: 100, images: [[1488, 2511]] },
        { duration: 100, images: [[1612, 2511]] },
        { duration: 500, images: [[1736, 2511]] },
        { duration: 100, images: [[1860, 2511]] },
        { duration: 100, images: [[1984, 2511]] },
        { duration: 100, images: [[2108, 2511]] },
        { duration: 100, images: [[2232, 2511]], exitBranch: 48 },
        { duration: 100, images: [[2356, 2511]] },
        { duration: 100, images: [[2480, 2511]] },
        { duration: 100, images: [[2604, 2511]] },
        { duration: 100, images: [[2728, 2511]] },
        { duration: 100, images: [[2852, 2511]] },
        { duration: 100, images: [[2976, 2511]] },
        { duration: 100, images: [[3100, 2511]] },
        { duration: 100, images: [[0, 2604]] },
        { duration: 100, images: [[124, 2604]] },
        { duration: 100, images: [[248, 2604]] },
        { duration: 100, images: [[372, 2604]] },
        { duration: 100, images: [[496, 2604]] },
        { duration: 100, images: [[620, 2604]] },
        { duration: 100, images: [[744, 2604]] },
        { duration: 100, images: [[868, 2604]] },
        { duration: 100, images: [[992, 2604]] },
        { duration: 100, images: [[1116, 2604]] },
        { duration: 100, images: [[1240, 2604]] },
        { duration: 100, images: [[1364, 2604]] },
        { duration: 100, images: [[1488, 2604]] },
        { duration: 100, images: [[1612, 2604]], exitBranch: 58 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookDownRight: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[1860, 93]] },
        { duration: 100, images: [[1984, 93]] },
        { duration: 100, images: [[2108, 93]] },
        { duration: 100, images: [[2232, 93]] },
        { duration: 100, images: [[2356, 93]] },
        { duration: 100, images: [[2480, 93]] },
        { duration: 400, images: [[2604, 93]] },
        { duration: 100, images: [[2728, 93]] },
        { duration: 100, images: [[2852, 93]], exitBranch: 10 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GetArtsy: {
      frames: [
        {
          duration: 100,
          images: [[0, 0]],
          exitBranch: 49,
          sound: "29",
          branching: { branches: [{ frameIndex: 29, weight: 50 }] },
        },
        { duration: 100, images: [[2480, 1860]] },
        { duration: 100, images: [[2604, 1860]] },
        { duration: 100, images: [[2728, 1860]] },
        { duration: 100, images: [[2852, 1860]] },
        { duration: 100, images: [[2976, 1860]] },
        { duration: 100, images: [[3100, 1860]] },
        { duration: 100, images: [[0, 1953]] },
        { duration: 100, images: [[124, 1953]] },
        { duration: 100, images: [[248, 1953]] },
        { duration: 100, images: [[372, 1953]] },
        { duration: 100, images: [[496, 1953]] },
        { duration: 100, images: [[620, 1953]] },
        { duration: 100, images: [[744, 1953]], sound: "20" },
        { duration: 100, images: [[868, 1953]] },
        { duration: 100, images: [[992, 1953]] },
        { duration: 100, images: [[1116, 1953]] },
        { duration: 100, images: [[1240, 1953]] },
        { duration: 100, images: [[1364, 1953]] },
        { duration: 100, images: [[1488, 1953]] },
        { duration: 100, images: [[1612, 1953]] },
        { duration: 100, images: [[1736, 1953]] },
        { duration: 100, images: [[1860, 1953]] },
        { duration: 100, images: [[1984, 1953]] },
        { duration: 100, images: [[2108, 1953]] },
        { duration: 100, images: [[2232, 1953]] },
        { duration: 100, images: [[2356, 1953]] },
        { duration: 100, images: [[2480, 1953]] },
        {
          duration: 100,
          images: [[2604, 1953]],
          exitBranch: 49,
          branching: { branches: [{ frameIndex: 49, weight: 100 }] },
        },
        { duration: 100, images: [[0, 1860]] },
        { duration: 100, images: [[124, 1860]] },
        { duration: 100, images: [[248, 1860]] },
        { duration: 100, images: [[372, 1860]], sound: "20" },
        { duration: 100, images: [[496, 1860]] },
        { duration: 100, images: [[620, 1860]] },
        { duration: 100, images: [[744, 1860]] },
        { duration: 100, images: [[868, 1860]] },
        { duration: 100, images: [[992, 1860]] },
        { duration: 100, images: [[1116, 1860]] },
        { duration: 100, images: [[1240, 1860]] },
        { duration: 100, images: [[1364, 1860]] },
        { duration: 100, images: [[1488, 1860]] },
        { duration: 100, images: [[1612, 1860]] },
        { duration: 100, images: [[1736, 1860]] },
        { duration: 100, images: [[1860, 1860]] },
        { duration: 100, images: [[1984, 1860]] },
        { duration: 100, images: [[2108, 1860]] },
        { duration: 100, images: [[2232, 1860]] },
        { duration: 100, images: [[2356, 1860]], exitBranch: 49 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Show: {
      frames: [
        { duration: 10 },
        { duration: 10, images: [[1736, 93]] },
        { duration: 10, images: [[1612, 93]] },
        { duration: 10, images: [[1488, 93]] },
        { duration: 10, images: [[0, 0]] },
      ],
    },
    IdleLowersToGround: {
      frames: [
        {
          duration: 500,
          images: [[0, 0]],
          exitBranch: 20,
          branching: { branches: [{ frameIndex: 0, weight: 85 }] },
        },
        { duration: 100, images: [[1736, 279]] },
        {
          duration: 100,
          images: [[1860, 279]],
          exitBranch: 20,
          branching: { branches: [{ frameIndex: 0, weight: 80 }] },
        },
        { duration: 100, images: [[1736, 2604]] },
        { duration: 100, images: [[1860, 2604]] },
        { duration: 100, images: [[1984, 2604]] },
        { duration: 100, images: [[2108, 2604]] },
        { duration: 130, images: [[2232, 2604]] },
        { duration: 160, images: [[2356, 2604]] },
        { duration: 200, images: [[2480, 2604]] },
        {
          duration: 750,
          images: [[2604, 2604]],
          exitBranch: 11,
          branching: { branches: [{ frameIndex: 10, weight: 85 }] },
        },
        { duration: 200, images: [[2728, 2604]] },
        { duration: 200, images: [[2852, 2604]] },
        { duration: 100, images: [[2976, 2604]] },
        { duration: 100, images: [[3100, 2604]] },
        { duration: 100, images: [[0, 2697]] },
        { duration: 100, images: [[124, 2697]] },
        { duration: 100, images: [[248, 2697]] },
        { duration: 100, images: [[372, 2697]] },
        { duration: 100, images: [[496, 2697]], exitBranch: 20 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookDown: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[1860, 93]] },
        { duration: 100, images: [[1984, 93]] },
        { duration: 100, images: [[2108, 93]] },
        { duration: 100, images: [[2232, 93]] },
        { duration: 100, images: [[2356, 93]] },
        { duration: 100, images: [[2480, 93]] },
        { duration: 400, images: [[2604, 93]] },
        { duration: 100, images: [[2728, 93]] },
        { duration: 100, images: [[2852, 93]], exitBranch: 10 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Searching: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 100, images: [[2852, 1395]] },
        { duration: 100, images: [[2976, 1395]] },
        { duration: 100, images: [[3100, 1395]] },
        { duration: 100, images: [[620, 2697]], exitBranch: 42, sound: "5" },
        { duration: 600, images: [[744, 2697]] },
        { duration: 100, images: [[868, 2697]] },
        { duration: 100, images: [[992, 2697]] },
        { duration: 100, images: [[1116, 2697]] },
        { duration: 100, images: [[1240, 2697]] },
        { duration: 330, images: [[1364, 2697]] },
        {
          duration: 330,
          images: [[1488, 2697]],
          exitBranch: 12,
          branching: {
            branches: [
              { frameIndex: 11, weight: 65 },
              { frameIndex: 15, weight: 10 },
            ],
          },
        },
        { duration: 100, images: [[1612, 2697]] },
        {
          duration: 330,
          images: [[1736, 2697]],
          exitBranch: 14,
          branching: {
            branches: [
              { frameIndex: 13, weight: 65 },
              { frameIndex: 11, weight: 8 },
            ],
          },
        },
        { duration: 100, images: [[1612, 2697]] },
        { duration: 100, images: [[1860, 2697]] },
        { duration: 100, images: [[1984, 2697]] },
        { duration: 100, images: [[2108, 2697]] },
        {
          duration: 100,
          images: [[2232, 2697]],
          exitBranch: 42,
          sound: "26",
          branching: { branches: [{ frameIndex: 19, weight: 50 }] },
        },
        { duration: 100, images: [[2356, 2697]] },
        { duration: 100, images: [[2480, 2697]] },
        { duration: 100, images: [[2604, 2697]] },
        { duration: 100, images: [[2728, 2697]] },
        { duration: 100, images: [[2852, 2697]] },
        {
          duration: 300,
          images: [[2976, 2697]],
          exitBranch: 25,
          branching: { branches: [{ frameIndex: 24, weight: 70 }] },
        },
        { duration: 100, images: [[3100, 2697]] },
        { duration: 100, images: [[0, 2790]] },
        {
          duration: 100,
          images: [[124, 2790]],
          exitBranch: 42,
          sound: "5",
          branching: { branches: [{ frameIndex: 33, weight: 50 }] },
        },
        { duration: 100, images: [[248, 2790]], exitBranch: 42 },
        { duration: 160, images: [[372, 2790]] },
        {
          duration: 660,
          images: [[496, 2790]],
          exitBranch: 31,
          branching: { branches: [{ frameIndex: 30, weight: 40 }] },
        },
        { duration: 160, images: [[372, 2790]], exitBranch: 42 },
        {
          duration: 600,
          images: [[248, 2790]],
          exitBranch: 33,
          branching: { branches: [{ frameIndex: 32, weight: 70 }] },
        },
        { duration: 100, images: [[620, 2790]] },
        { duration: 100, images: [[744, 2790]] },
        {
          duration: 400,
          images: [[868, 2790]],
          exitBranch: 36,
          branching: {
            branches: [
              { frameIndex: 35, weight: 65 },
              { frameIndex: 15, weight: 35 },
            ],
          },
        },
        { duration: 100, images: [[1240, 2697]] },
        { duration: 100, images: [[1116, 2697]] },
        { duration: 100, images: [[992, 2697]] },
        { duration: 100, images: [[868, 2697]], exitBranch: 42, sound: "23" },
        { duration: 100, images: [[744, 2697]] },
        { duration: 100, images: [[620, 2697]] },
        { duration: 100, images: [[3100, 1395]] },
        { duration: 100, images: [[2976, 1395]] },
        { duration: 100, images: [[2852, 1395]], exitBranch: 45 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    EmptyTrash: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "29" },
        { duration: 100, images: [[992, 2790]], sound: "31" },
        { duration: 100, images: [[1488, 2046]] },
        { duration: 100, images: [[1612, 2046]] },
        { duration: 100, images: [[1736, 2046]] },
        { duration: 100, images: [[1860, 2046]] },
        { duration: 100, images: [[1984, 2046]] },
        { duration: 100, images: [[2108, 2046]] },
        { duration: 100, images: [[2232, 2046]] },
        { duration: 100, images: [[2356, 2046]] },
        { duration: 100, images: [[2480, 2046]] },
        { duration: 100, images: [[2604, 2046]] },
        { duration: 100, images: [[2728, 2046]] },
        { duration: 100, images: [[2852, 2046]], sound: "16" },
        { duration: 100, images: [[2976, 2046]] },
        { duration: 100, images: [[3100, 2046]] },
        { duration: 100, images: [[0, 2139]] },
        { duration: 100, images: [[124, 2139]], sound: "8" },
        { duration: 100, images: [[248, 2139]] },
        { duration: 100, images: [[372, 2139]] },
        { duration: 100, images: [[496, 2139]], exitBranch: 29, sound: "25" },
        { duration: 100, images: [[620, 2139]] },
        { duration: 100, images: [[744, 2139]], exitBranch: 29 },
        { duration: 100, images: [[868, 2139]] },
        { duration: 100, images: [[992, 2139]], exitBranch: 29 },
        { duration: 100, images: [[1116, 2139]] },
        { duration: 100, images: [[1240, 2139]], exitBranch: 29 },
        { duration: 100, images: [[1364, 2139]] },
        { duration: 100, images: [[1488, 2139]] },
        { duration: 100, images: [[1612, 2139]], sound: "14" },
        { duration: 100, images: [[1736, 2139]] },
        { duration: 100, images: [[1860, 2139]] },
        { duration: 100, images: [[1984, 2139]] },
        { duration: 100, images: [[2108, 2139]] },
        { duration: 100, images: [[2232, 2139]] },
        { duration: 100, images: [[2356, 2139]] },
        { duration: 100, images: [[2480, 2139]] },
        { duration: 100, images: [[2604, 2139]] },
        { duration: 100, images: [[2728, 2139]] },
        { duration: 100, images: [[2852, 2139]] },
        { duration: 100, images: [[2976, 2139]] },
        { duration: 100, images: [[3100, 2139]] },
        { duration: 500 },
        { duration: 100, images: [[248, 465]] },
        { duration: 100, images: [[372, 465]], sound: "7" },
        { duration: 100, images: [[496, 465]] },
        { duration: 100, images: [[620, 465]] },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 2790],
          ],
          sound: "12",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [496, 465],
            [1488, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [372, 465],
            [1612, 2790],
          ],
          sound: "7",
        },
        {
          duration: 100,
          images: [
            [248, 465],
            [1736, 2790],
          ],
          exitBranch: 53,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Greeting: {
      frames: [
        { duration: 0, sound: "29" },
        { duration: 100, images: [[248, 465]] },
        { duration: 100, images: [[372, 465]], sound: "7" },
        {
          duration: 100,
          images: [[496, 465]],
          exitBranch: 4,
          branching: {
            branches: [
              { frameIndex: 64, weight: 25 },
              { frameIndex: 25, weight: 25 },
              { frameIndex: 10, weight: 25 },
            ],
          },
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 2790],
          ],
          sound: "31",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 2790],
          ],
          exitBranch: 112,
          branching: { branches: [{ frameIndex: 112, weight: 100 }] },
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 2790],
          ],
          sound: "5",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 2790],
          ],
          sound: "23",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 2790],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 2883],
          ],
          sound: "5",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 0],
          ],
          exitBranch: 112,
          branching: { branches: [{ frameIndex: 112, weight: 100 }] },
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 2883],
          ],
          sound: "8",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 2883],
          ],
          exitBranch: 112,
          branching: { branches: [{ frameIndex: 112, weight: 100 }] },
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 2883],
          ],
          sound: "30",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 2883],
          ],
          sound: "31",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 2883],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 2976],
          ],
          exitBranch: 112,
          branching: { branches: [{ frameIndex: 112, weight: 100 }] },
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 2976],
          ],
          sound: "31",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 2976],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1488, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1612, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1736, 3069],
          ],
          sound: "21",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1860, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1984, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2108, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2232, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2356, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2480, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2604, 3069],
          ],
          sound: "8",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2728, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2852, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [2976, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [3100, 3069],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [124, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [248, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [372, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [496, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [620, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [744, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [868, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [992, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1116, 3162],
          ],
          sound: "31",
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1240, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [1364, 3162],
          ],
        },
        {
          duration: 100,
          images: [
            [620, 465],
            [0, 0],
          ],
        },
        {
          duration: 100,
          images: [
            [1488, 3162],
            [496, 465],
          ],
        },
        {
          duration: 100,
          images: [
            [1488, 3162],
            [372, 465],
          ],
          sound: "7",
        },
        {
          duration: 100,
          images: [
            [1488, 3162],
            [248, 465],
          ],
          exitBranch: 116,
        },
        { duration: 20, images: [[0, 0]] },
      ],
    },
    LookUp: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[620, 744]] },
        { duration: 100, images: [[744, 744]] },
        { duration: 100, images: [[868, 744]] },
        { duration: 400, images: [[992, 744]] },
        { duration: 100, images: [[1116, 744]] },
        { duration: 100, images: [[1240, 744]], exitBranch: 7 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GestureDown: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 330,
          images: [[1860, 93]],
          exitBranch: 2,
          branching: { branches: [{ frameIndex: 1, weight: 75 }] },
        },
        { duration: 100, images: [[1984, 93]] },
        {
          duration: 330,
          images: [[2108, 93]],
          exitBranch: 4,
          branching: { branches: [{ frameIndex: 3, weight: 75 }] },
        },
        { duration: 100, images: [[2232, 93]] },
        { duration: 100, images: [[2356, 93]] },
        {
          duration: 100,
          images: [[2480, 93]],
          exitBranch: 7,
          branching: { branches: [{ frameIndex: 3, weight: 30 }] },
        },
        { duration: 400, images: [[2604, 93]] },
        { duration: 100, images: [[2728, 93]] },
        { duration: 100, images: [[2852, 93]], exitBranch: 10 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    IdleLookLeft: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 330,
          images: [[0, 1767]],
          exitBranch: 9,
          branching: { branches: [{ frameIndex: 1, weight: 60 }] },
        },
        { duration: 100, images: [[124, 1767]] },
        { duration: 100, images: [[248, 1767]] },
        {
          duration: 500,
          images: [[372, 1767]],
          exitBranch: 5,
          branching: { branches: [{ frameIndex: 4, weight: 60 }] },
        },
        {
          duration: 100,
          images: [[496, 1767]],
          exitBranch: 9,
          branching: { branches: [{ frameIndex: 4, weight: 70 }] },
        },
        { duration: 400, images: [[620, 1767]] },
        { duration: 100, images: [[744, 1767]] },
        {
          duration: 100,
          images: [[868, 1767]],
          exitBranch: 9,
          branching: { branches: [{ frameIndex: 1, weight: 40 }] },
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    RestPose: { frames: [{ duration: 100, images: [[0, 0]] }] },
    LookDownLeft: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 100, images: [[1860, 93]] },
        { duration: 100, images: [[1984, 93]] },
        { duration: 100, images: [[2108, 93]] },
        { duration: 100, images: [[2232, 93]] },
        { duration: 100, images: [[2356, 93]] },
        { duration: 100, images: [[2480, 93]] },
        { duration: 400, images: [[2604, 93]] },
        { duration: 100, images: [[2728, 93]], exitBranch: 9 },
        { duration: 100, images: [[2852, 93]] },
      ],
    },
  },
});
