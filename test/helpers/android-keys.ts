class AndroidKeys {
    Zero = 7;
    One = 8;
    Two = 9;
    Three = 10;
    Four = 11;
    Five = 12;
    Six = 13;
    Seven = 14;
    Eight = 15;
    Nine = 16;
    Pound = 18;
    A = 29;
    B = 30;
    C = 31;
    D = 32;
    E = 33;
    F = 34;
    G = 35;
    H = 36;
    I = 37;
    J = 38;
    K = 39;
    L = 40;
    M = 41;
    N = 42;
    O = 43;
    P = 44;
    Q = 45;
    R = 46;
    S = 47;
    T = 48;
    U = 49;
    V = 50;
    W = 51;
    X = 52;
    Y = 53;
    Z = 54;
    Enter = 66;
    BackSpace = 67;
    Space = 62;
    At = 77;
    Period = 56;

    getKey(letter: string): number {
        switch (letter.toUpperCase())
        {
            case '0':
                return this.Zero;
            case '1':
                return this.One;
            case '2':
                return this.Two;
            case '3':
                return this.Three;
            case '4':
                return this.Four;
            case '5':
                return this.Five;
            case '6':
                return this.Six;
            case '7':
                return this.Seven;
            case '8':
                return this.Eight;
            case '9':
                return this.Nine;
            case 'A':
                return this.A;
            case 'B':
                return this.B;
            case 'C':
                return this.C;
            case 'D':
                return this.D;
            case 'E':
                return this.E;
            case 'F':
                return this.F;
            case 'G':
                return this.G;
            case 'H':
                return this.H;
            case 'I':
                return this.I;
            case 'J':
                return this.J;
            case 'K':
                return this.K;
            case 'L':
                return this.L;
            case 'M':
                return this.M;
            case 'N':
                return this.N;
            case 'O':
                return this.O;
            case 'P':
                return this.P;
            case 'Q':
                return this.Q;
            case 'R':
                return this.R;
            case 'S':
                return this.S;
            case 'T':
                return this.T;
            case 'U':
                return this.U;
            case 'V':
                return this.V;
            case 'W':
                return this.W;
            case 'X':
                return this.X;
            case 'Y':
                return this.Y;
            case 'Z':
                return this.Z;
            case ' ':
                return this.Space;
            case '@':
                return this.At;
            case '.':
                return this.Period;
            case '#':
                return this.Pound;
            default:
                return -1;
        }
    }
    sendKey(): void {
        
    }

}
const Key = new AndroidKeys();
export default Key;
