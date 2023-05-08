export class MotwCharacter {
    constructor(
        public Name: string = "",
        public Description: string = "",
        public Charm: number = 0,
        public Cool: number = 0,
        public Sharp: number = 0,
        public Tough: number = 0,
        public Weird: number = 0,
        public LuckUsed: number = 0,
        public LuckSpecial: string = "",
        public Harm: number = 0,
        public Unstable: boolean = false,
        public Experience: number = 0,
        public Fate: string = "",
        public Notes: string = "",
        public Moves: Array<MotwMoves> = [],
        public Gear: Array<string> = [],
        public Improvements: Array<string>= [],
        public AdvancedImprovements: Array<string>= [],
    ) { }
}
export class MotwMoves {
    constructor(
        public Name: string = "",
        public Description: string = "",
    ) { }
}
