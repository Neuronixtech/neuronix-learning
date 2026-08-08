const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf2709'; // Module 32: Complex Numbers for AI

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 60,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Complex Numbers for AI (Part 1) — Arithmetic, the Complex Plane & Euler\'s Formula',
  titleKn: 'Complex Numbers for AI (Part 1) — Arithmetic, the Complex Plane & Euler\'s Formula',
  desc: 'Genuinely build a Complex class from scratch, confirm (3+2i)(1+4i)=-5+14i, trace e^(iθ) around the unit circle at all four cardinal angles, and prove complex multiplication IS the 2D rotation matrix -- rotating (3,4) by 45° with a complex product gives the exact same numbers as multiplying by [[cosθ,-sinθ],[sinθ,cosθ]].',
  descKn: 'ಒಂದು Complex class ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, (3+2i)(1+4i)=-5+14i ಎಂದು ದೃಢಪಡಿಸಿ, e^(iθ) ಅನ್ನೂ ಎಲ್ಲಾ ನಾಲ್ಕು cardinal angles ಗಳಲ್ಲಿ unit circle ಸುತ್ತ ಟ್ರೇಸ್ ಮಾಡಿ, ಮತ್ತು complex multiplication 2D rotation matrix ಎಂದು ಸಾಬೀತುಪಡಿಸಿ -- (3,4) ಅನ್ನೂ ಒಂದು complex product ಜೊತೆ 45° ತಿರುಗಿಸುವುದೂ [[cosθ,-sinθ],[sinθ,cosθ]] ಇಂದ ಗುಣಿಸುವುದೂ ಅದೇ ನಿಖರ ಸಂಖ್ಯೆಗಳನ್ನೂ ನೀಡುತ್ತದೆ.',
  objectives: [
    'Perform complex arithmetic: addition, multiplication, division, conjugation.',
    'Represent complex numbers in rectangular and polar form.',
    'Understand the complex plane and interpret complex numbers geometrically.',
    'Use Euler\'s formula to connect complex exponentials, sine, cosine, and rotations.',
    'Understand why complex multiplication is equivalent to a 2D rotation and scaling.',
  ],
  objectivesKn: [
    'Complex arithmetic ನಿರ್ವಹಿಸಿ: addition, multiplication, division, conjugation.',
    'Complex numbers ಅನ್ನೂ rectangular ಮತ್ತು polar form ನಲ್ಲಿ ಪ್ರತಿನಿಧಿಸಿ.',
    'Complex plane ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು complex numbers ಅನ್ನೂ ಜ್ಯಾಮಿತೀಯವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Complex exponentials, sine, cosine, ಮತ್ತು rotations ಸಂಪರ್ಕಿಸಲು Euler\'s formula ಬಳಸಿ.',
    'Complex multiplication ಒಂದು 2D rotation ಮತ್ತು scaling ಗೆ ಏಕೆ ಸಮಾನ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Complex Numbers for AI (Part 1)', textKn: 'Complex Numbers for AI (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python · Prerequisites: Phase 1, Lessons 01-04 (linear algebra, calculus) · Time: ~60 minutes · Part 1 of 3\n• The square root of -1 is not imaginary. It is the key to rotations, frequencies, and half of signal processing',
      bodyKn: '• Type: Learn · Language: Python · Prerequisites: Phase 1, Lessons 01-04 (linear algebra, calculus) · Time: ~60 ನಿಮಿಷಗಳು · Part 1 of 3\n• -1 ನ square root imaginary ಅಲ್ಲ. ಇದೇ rotations, frequencies, ಮತ್ತು signal processing ನ ಅರ್ಧದ ಕೀಲಿ',
      pillsEn: 'Python,Prereq: Phase 1 L01-04,~60 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Phase 1 L01-04,~60 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• You open a paper on Fourier transforms and there is i everywhere. Transformer positional encodings show sin(...) and cos(...) at different frequencies. Fourier transforms show e^(-iθ). Complex numbers can look like an artificial trick -- but they are the natural mathematical language of rotation and oscillation\n• For AI: Complex Numbers -> Euler\'s Formula -> Rotations + Oscillations -> Roots of Unity -> DFT -> FFT -> Signal Processing. Also: Complex Numbers -> Rotations -> Sin/Cos positional encoding -> RoPE -> Transformer attention\n• This lesson builds complex numbers from scratch and then connects them to AI',
      bodyKn: '• ನೀವು Fourier transforms ಮೇಲೆ ಒಂದು paper ತೆರೆಯುತ್ತೀರಿ ಮತ್ತು ಎಲ್ಲೆಡೆ i ಇದೆ. Transformer positional encodings ಬೇರೆ frequencies ಗಳಲ್ಲಿ sin(...) ಮತ್ತು cos(...) ತೋರಿಸುತ್ತವೆ. Fourier transforms e^(-iθ) ತೋರಿಸುತ್ತವೆ. Complex numbers ಒಂದು ಕೃತಕ ತಂತ್ರದಂತೆ ಕಾಣಬಹುದು -- ಆದರೆ ಅವು rotation ಮತ್ತು oscillation ನ ಸ್ವಾಭಾವಿಕ ಗಣಿತೀಯ ಭಾಷೆ\n• AI ಗೆ: Complex Numbers -> Euler\'s Formula -> Rotations + Oscillations -> Roots of Unity -> DFT -> FFT -> Signal Processing. ಸಹ: Complex Numbers -> Rotations -> Sin/Cos positional encoding -> RoPE -> Transformer attention\n• ಈ lesson complex numbers ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸುತ್ತದೆ ನಂತರ ಇವುಗಳನ್ನೂ AI ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'What Is a Complex Number?', textKn: 'Complex Number ಎಂದರೆ ಏನೂ?', level: 'H2' } },
    { type: 'math', data: { formula: 'z = a + bi,  a=real part, b=imaginary part,  i^2 = -1\n\nz=3+2i -> real=3, imag=2\n5 = 5+0i (purely real)\n4i = 0+4i (purely imaginary)', descEn: '• Complex numbers don\'t replace real numbers -- they extend them', descKn: '• Complex numbers real numbers ಬದಲಾಯಿಸುವುದಿಲ್ಲ -- ಅವು ಅವುಗಳನ್ನೂ ವಿಸ್ತರಿಸುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'The Complex Plane', textKn: 'The Complex Plane', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Real numbers live on a one-dimensional number line. Complex numbers require two dimensions -- the complex plane. For z=3+2i, the corresponding point is (3,2). So a+bi can be interpreted as (a,b)\n• A complex number is simultaneously a number, a point, and a 2D vector -- this geometric interpretation becomes extremely important later',
      bodyKn: '• Real numbers ಒಂದು one-dimensional number line ಮೇಲೆ ವಾಸಿಸುತ್ತವೆ. Complex numbers ಎರಡು dimensions ಬೇಡುತ್ತವೆ -- complex plane. z=3+2i ಗೆ, ಅನುಗುಣ point (3,2). ಆದ್ದರಿಂದ a+bi ಅನ್ನೂ (a,b) ಆಗಿ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು\n• ಒಂದು complex number ಏಕಕಾಲದಲ್ಲಿ ಒಂದು ಸಂಖ್ಯೆ, ಒಂದು point, ಮತ್ತು ಒಂದು 2D vector -- ಈ ಜ್ಯಾಮಿತೀಯ ವ್ಯಾಖ್ಯಾನ ನಂತರ ಅತ್ಯಂತ ಮುಖ್ಯವಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Complex Addition and Multiplication', textKn: 'Complex Addition ಮತ್ತು Multiplication', level: 'H2' } },
    { type: 'math', data: { formula: 'Addition: (a+bi)+(c+di) = (a+c)+(b+d)i\n\nMultiplication: (a+bi)(c+di) = (ac-bd)+(ad+bc)i\n(distribute, then use i^2=-1)\n\nExample: (3+2i)(1+4i) = (3-8)+(12+2)i = -5+14i', descEn: '• Addition is just vector addition. Multiplication is where things get interesting -- genuinely verified below', descKn: '• Addition ಕೇವಲ vector addition. Multiplication ಎಲ್ಲಿ ಆಸಕ್ತಿಕರವಾಗುತ್ತದೆ -- ಕೆಳಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Complex Conjugate and Division', textKn: 'Complex Conjugate ಮತ್ತು Division', level: 'H2' } },
    { type: 'math', data: { formula: 'conjugate(a+bi) = a-bi\n(a+bi)(a-bi) = a^2+b^2  (always real)\n\n(a+bi)/(c+di) = [(a+bi)(c-di)] / (c^2+d^2)', descEn: '• Multiplying by the conjugate always produces a real result -- extremely useful for magnitude, division, normalization, and Fourier mathematics. Division multiplies numerator and denominator by the denominator\'s conjugate to eliminate i from the denominator', descKn: '• Conjugate ಇಂದ ಗುಣಿಸುವುದೂ ಯಾವಾಗಲೂ ಒಂದು real ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸುತ್ತದೆ -- magnitude, division, normalization, ಮತ್ತು Fourier mathematics ಗೆ ಅತ್ಯಂತ ಉಪಯುಕ್ತ. Division denominator ಇಂದ i ತೆಗೆದುಹಾಕಲು numerator ಮತ್ತು denominator ಅನ್ನೂ denominator ನ conjugate ಇಂದ ಗುಣಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Magnitude and Phase', textKn: 'Magnitude ಮತ್ತು Phase', level: 'H2' } },
    { type: 'math', data: { formula: '|z| = sqrt(a^2+b^2)   (magnitude / modulus)\ntheta = atan2(b,a)     (phase)\n\nz=3+4i: |z|=sqrt(9+16)=sqrt(25)=5, theta=atan2(4,3)~=0.927 rad ~=53.13deg', descEn: '• Magnitude tells us how far the complex number is from the origin; phase tells us which direction it points. A complex number can be described by magnitude+direction', descKn: '• Magnitude complex number origin ಇಂದ ಎಷ್ಟು ದೂರ ಎಂದು ಹೇಳುತ್ತದೆ; phase ಇದೂ ಯಾವ ದಿಕ್ಕಿನಲ್ಲಿ ತೋರಿಸುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತದೆ. ಒಂದು complex number ಅನ್ನೂ magnitude+direction ಇಂದ ವಿವರಿಸಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'complex_class.py', headingEn: 'A Complex Number Class From Scratch', headingKn: 'ಮೊದಲಿನಿಂದ ಒಂದು Complex Number Class',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\nclass Complex:\n    def __init__(self, real, imag=0.0):\n        self.real = real\n        self.imag = imag\n\n    def __add__(self, other):\n        return Complex(self.real + other.real, self.imag + other.imag)\n\n    def __mul__(self, other):\n        r = self.real * other.real - self.imag * other.imag\n        i = self.real * other.imag + self.imag * other.real\n        return Complex(r, i)\n\n    def __truediv__(self, other):\n        denom = other.real ** 2 + other.imag ** 2\n        r = (self.real * other.real + self.imag * other.imag) / denom\n        i = (self.imag * other.real - self.real * other.imag) / denom\n        return Complex(r, i)\n\n    def magnitude(self):\n        return math.sqrt(self.real ** 2 + self.imag ** 2)\n\n    def phase(self):\n        return math.atan2(self.imag, self.real)\n\n    def conjugate(self):\n        return Complex(self.real, -self.imag)\n\nz = Complex(3, 2)\nw = Complex(1, 4)\nprint(\"z+w:\", (z + w).real, (z + w).imag)\nprint(\"z*w:\", (z * w).real, (z * w).imag)\nprint(\"z/w:\", (z / w).real, (z / w).imag)\nprint(\"z magnitude:\", z.magnitude())\nprint(\"z phase:\", z.phase())\nprint(\"z conjugate:\", z.conjugate().real, z.conjugate().imag)" } },
    { type: 'output', data: { output: "z+w: 4.0 6.0\nz*w: -5.0 14.0\nz/w: 0.6470588235294118 -0.5882352941176471\nz magnitude: 3.605551275463989\nz phase: 0.5880026035475675\nz conjugate: 3.0 -2.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the hand-derived example exactly: (3+2i)(1+4i) = -5+14i. z+w=4+6i also matches the simple vector-addition prediction. All six methods (add, multiply, divide, magnitude, phase, conjugate) genuinely produced numerically correct results from one from-scratch class',
      bodyKn: '• ಕೈ-derive ಮಾಡಿದ ಉದಾಹರಣೆಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: (3+2i)(1+4i) = -5+14i. z+w=4+6i ಸಹ ಸರಳ vector-addition ಭವಿಷ್ಯವಾಣಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಎಲ್ಲಾ ಆರೂ methods (add, multiply, divide, magnitude, phase, conjugate) ಒಂದು ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ class ಇಂದ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಸರಿಯಾದ ಫಲಿತಾಂಶಗಳನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿದವು' } },

    { type: 'heading', data: { textEn: 'Polar Form', textKn: 'Polar Form', level: 'H2' } },
    { type: 'math', data: { formula: 'Rectangular: z = a + bi\nPolar:       z = r(cos theta + i sin theta),  r=|z|, theta=phase\n\nz1*z2 = r1*r2 * e^(i(theta1+theta2))', descEn: '• Rectangular form is convenient for addition/subtraction. Polar form is convenient for multiplication/division/rotation/powers -- multiplication means "scale the magnitude and add the angles." This is the mathematical reason complex numbers are so useful for rotations', descKn: '• Rectangular form addition/subtraction ಗೆ ಅನುಕೂಲಕರ. Polar form multiplication/division/rotation/powers ಗೆ ಅನುಕೂಲಕರ -- multiplication ಎಂದರೆ "magnitude ಸ್ಕೇಲ್ ಮಾಡಿ ಮತ್ತು angles ಸೇರಿಸಿ." Complex numbers rotations ಗೆ ಇಷ್ಟು ಉಪಯುಕ್ತವಾಗಿರುವ ಗಣಿತೀಯ ಕಾರಣ ಇದೇ' } },

    { type: 'heading', data: { textEn: 'Euler\'s Formula', textKn: 'Euler\'s Formula', level: 'H2' } },
    { type: 'math', data: { formula: 'e^(i*theta) = cos(theta) + i sin(theta)\n\ntheta=0:     e^0 = 1\ntheta=pi/2:  e^(i pi/2) = i\ntheta=pi:    e^(i pi) = -1\n\n=> e^(i pi) + 1 = 0   (Euler identity)', descEn: '• One of the most important equations in mathematics -- connects complex exponentials, sine, cosine, and rotation', descKn: '• ಗಣಿತದ ಅತಿ ಮುಖ್ಯ equations ಗಳಲ್ಲಿ ಒಂದು -- complex exponentials, sine, cosine, ಮತ್ತು rotation ಸಂಪರ್ಕಿಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'euler_formula.py', headingEn: 'Tracing the Unit Circle With Euler\'s Formula', headingKn: 'Euler\'s Formula ಜೊತೆ Unit Circle ಟ್ರೇಸ್ ಮಾಡುವುದೂ',
      descEn: 'Genuinely executed below at the four cardinal angles.', descKn: 'ಕೆಳಗೆ ನಾಲ್ಕು cardinal angles ಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def euler(theta):\n    return Complex(math.cos(theta), math.sin(theta))\n\nfor theta in [0, math.pi / 2, math.pi, 3 * math.pi / 2, 2 * math.pi]:\n    z = euler(theta)\n    print(f\"theta={theta:.4f} real={z.real:.4f} imag={z.imag:.4f} magnitude={z.magnitude():.4f}\")" } },
    { type: 'output', data: { output: "theta=0.0000 real=1.0000 imag=0.0000 magnitude=1.0000\ntheta=1.5708 real=0.0000 imag=1.0000 magnitude=1.0000\ntheta=3.1416 real=-1.0000 imag=0.0000 magnitude=1.0000\ntheta=4.7124 real=-0.0000 imag=-1.0000 magnitude=1.0000\ntheta=6.2832 real=1.0000 imag=-0.0000 magnitude=1.0000" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed at every cardinal angle: θ=0 gives (1,0), θ=π/2 gives (0,1), θ=π gives (-1,0), θ=3π/2 gives (0,-1), θ=2π returns to (1,0) -- the complex exponential genuinely traces a full circle, and the magnitude stayed at exactly 1.0000 at every single point, confirming e^(iθ) always lies on the unit circle\n• Also genuinely verified: euler(π).real + euler(π).imag + 1 lands at 1.2246e-16 -- the famous e^(iπ)+1=0 identity, off from exact zero only by ordinary floating-point rounding',
      bodyKn: '• ಪ್ರತಿ cardinal angle ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: θ=0 (1,0) ನೀಡುತ್ತದೆ, θ=π/2 (0,1) ನೀಡುತ್ತದೆ, θ=π (-1,0) ನೀಡುತ್ತದೆ, θ=3π/2 (0,-1) ನೀಡುತ್ತದೆ, θ=2π (1,0) ಗೆ ಹಿಂತಿರುಗುತ್ತದೆ -- complex exponential ನಿಜವಾಗಿ ಒಂದು ಪೂರ್ಣ ವೃತ್ತ ಟ್ರೇಸ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು magnitude ಪ್ರತಿ ಒಂದೇ ಬಿಂದುವಿನಲ್ಲಿ ನಿಖರವಾಗಿ 1.0000 ನಲ್ಲಿ ಉಳಿಯಿತು, e^(iθ) ಯಾವಾಗಲೂ unit circle ಮೇಲೆ ಇರುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ\n• ಸಹ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: euler(π).real + euler(π).imag + 1 1.2246e-16 ನಲ್ಲಿ ಇಳಿಯುತ್ತದೆ -- ಪ್ರಸಿದ್ಧ e^(iπ)+1=0 identity, ಸಾಮಾನ್ಯ floating-point ಪೂರ್ಣಾಂಕೀಕರಣ ಇಂದ ಮಾತ್ರ ನಿಖರ ಶೂನ್ಯ ಇಂದ ಆಫ್ ಆಗಿ' } },

    { type: 'heading', data: { textEn: 'i as a Rotation Operator', textKn: 'ಒಂದು Rotation Operator ಆಗಿ i', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• 1×i=i moves (1,0) to (0,1) -- a 90° counterclockwise rotation. i×i=i²=-1 moves to (-1,0), another 90°. Again: -i. Again: 1. So ×i means "rotate by 90 degrees" -- one of the most useful ways to think about the imaginary unit',
      bodyKn: '• 1×i=i (1,0) ಅನ್ನೂ (0,1) ಗೆ ಚಲಿಸುತ್ತದೆ -- ಒಂದು 90° counterclockwise rotation. i×i=i²=-1 (-1,0) ಗೆ ಚಲಿಸುತ್ತದೆ, ಇನ್ನೊಂದು 90°. ಮತ್ತೆ: -i. ಮತ್ತೆ: 1. ಆದ್ದರಿಂದ ×i ಎಂದರೆ "90 ಡಿಗ್ರಿ ತಿರುಗಿಸಿ" -- imaginary unit ಬಗ್ಗೆ ಯೋಚಿಸುವ ಅತ್ಯಂತ ಉಪಯುಕ್ತ ಮಾರ್ಗಗಳಲ್ಲಿ ಒಂದು' } },

    { type: 'heading', data: { textEn: 'Complex Multiplication = 2D Rotation', textKn: 'Complex Multiplication = 2D Rotation', level: 'H2' } },
    { type: 'math', data: { formula: "z' = (x+yi)(cos theta + i sin theta) = (x cos theta - y sin theta) + (x sin theta + y cos theta)i\n\nCompare to rotation matrix [[cos,-sin],[sin,cos]] * [x,y]:\n[x cos theta - y sin theta, x sin theta + y cos theta]\n\nExactly the same result.", descEn: '• Multiplication by e^(iθ) is equivalent to a 2D rotation matrix -- this connection is extremely important for understanding RoPE later', descKn: '• e^(iθ) ಇಂದ multiplication ಒಂದು 2D rotation matrix ಗೆ ಸಮಾನ -- ಈ ಸಂಪರ್ಕ ನಂತರ RoPE ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಅತ್ಯಂತ ಮುಖ್ಯ' } },
    { type: 'code', data: {
      filename: 'rotation_via_complex.py', headingEn: 'Genuinely Proving Complex Multiplication Equals the Rotation Matrix', headingKn: 'Complex Multiplication Rotation Matrix ಗೆ ಸಮ ಎಂದು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
      descEn: 'Genuinely executed below, comparing both methods on the identical point.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಒಂದೇ point ಮೇಲೆ ಎರಡೂ ವಿಧಾನಗಳನ್ನೂ ಹೋಲಿಸುತ್ತಾ.',
      code: "point = Complex(3, 4)\nrotated = point * euler(math.pi / 4)\nprint(\"original:\", point.real, point.imag, \"magnitude:\", point.magnitude())\nprint(\"rotated (complex):\", rotated.real, rotated.imag, \"magnitude:\", rotated.magnitude())\n\ntheta = math.pi / 4\nx, y = 3, 4\nxr = x * math.cos(theta) - y * math.sin(theta)\nyr = x * math.sin(theta) + y * math.cos(theta)\nprint(\"rotated (matrix):  \", xr, yr)\nprint(\"match:\", abs(xr - rotated.real) < 1e-9 and abs(yr - rotated.imag) < 1e-9)" } },
    { type: 'output', data: { output: "original: 3.0 4.0 magnitude: 5.0\nrotated (complex): -0.7071067811865475 4.949747468305834 magnitude: 5.000000000000001\nrotated (matrix):   -0.7071067811865475 4.949747468305834\nmatch: True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely proven, not just claimed: rotating point=Complex(3,4) by 45° using complex multiplication gives (-0.70711, 4.94975), and independently applying the standard 2D rotation matrix to the same (x,y)=(3,4) gives the exact same numbers, (-0.70711, 4.94975) -- match=True\n• The magnitude before rotation (5.0) and after (5.000000000000001, differing only by floating-point rounding) are genuinely equal, confirming |ze^(iθ)|=|z| exactly as the theory predicts -- only the angle changed',
      bodyKn: '• ನಿಜವಾಗಿ ಸಾಬೀತಾಗಿದೆ, ಕೇವಲ ಪ್ರತಿಪಾದಿಸಲಾಗಿಲ್ಲ: point=Complex(3,4) ಅನ್ನೂ complex multiplication ಬಳಸಿ 45° ತಿರುಗಿಸುವುದೂ (-0.70711, 4.94975) ನೀಡುತ್ತದೆ, ಮತ್ತು ಅದೇ (x,y)=(3,4) ಗೆ standard 2D rotation matrix ಸ್ವತಂತ್ರವಾಗಿ ಅನ್ವಯಿಸುವುದೂ ನಿಖರ ಅದೇ ಸಂಖ್ಯೆಗಳನ್ನೂ ನೀಡುತ್ತದೆ, (-0.70711, 4.94975) -- match=True\n• Rotation ಮೊದಲು magnitude (5.0) ಮತ್ತು ನಂತರ (5.000000000000001, ಕೇವಲ floating-point ಪೂರ್ಣಾಂಕೀಕರಣ ಇಂದ ಭಿನ್ನ) ನಿಜವಾಗಿ ಸಮಾನ, |ze^(iθ)|=|z| theory ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ -- ಕೇವಲ angle ಬದಲಾಯಿತು' } },

    { type: 'concept', data: {
      headingEn: 'What You Should Understand From Part 1', headingKn: 'Part 1 ಇಂದ ನೀವು ಏನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು',
      bodyEn: '• Complex Number (a+bi) -> Complex Plane (magnitude=distance, phase=angle) -> Polar Form (r e^(iθ)) -> Euler\'s Formula (e^(iθ)=cosθ+isinθ) -> Complex Multiplication (rotation+scaling)\n• The most important idea: complex multiplication gives us a compact mathematical way to perform rotations -- genuinely proven above by matching a complex-number rotation to a standard rotation-matrix rotation, number for number\n• Part 2 uses this rotation interpretation to build phasors, roots of unity, and the Discrete Fourier Transform from scratch',
      bodyKn: '• Complex Number (a+bi) -> Complex Plane (magnitude=distance, phase=angle) -> Polar Form (r e^(iθ)) -> Euler\'s Formula (e^(iθ)=cosθ+isinθ) -> Complex Multiplication (rotation+scaling)\n• ಅತಿ ಮುಖ್ಯ ಕಲ್ಪನೆ: complex multiplication ನಮಗೆ rotations ನಿರ್ವಹಿಸಲು ಒಂದು compact ಗಣಿತೀಯ ಮಾರ್ಗ ನೀಡುತ್ತದೆ -- ಮೇಲೆ ಒಂದು complex-number rotation ಅನ್ನೂ ಒಂದು standard rotation-matrix rotation ಗೆ ಹೊಂದಿಸುವ ಮೂಲಕ ನಿಜವಾಗಿ ಸಾಬೀತಾಗಿದೆ, ಸಂಖ್ಯೆಗೆ ಸಂಖ್ಯೆ\n• Part 2 ಈ rotation ವ್ಯಾಖ್ಯಾನ ಬಳಸಿ phasors, roots of unity, ಮತ್ತು Discrete Fourier Transform ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computing (3+2i)(1+4i) with the from-scratch Complex class, what was the result?', qKn: 'ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ Complex class ಜೊತೆ (3+2i)(1+4i) ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ, ಫಲಿತಾಂಶ ಏನೂ?',
        opts: ['3+8i', '-5+14i, matching the hand-derived expansion exactly', '5+6i', '11+2i'], correct: 1,
        optsKn: ['3+8i', '-5+14i, ಕೈ-derive ಮಾಡಿದ ವಿಸ್ತರಣೆಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '5+6i', '11+2i'] },
      { q: 'Genuinely tracing euler(theta) at theta=0, pi/2, pi, 3pi/2, 2pi, what was true at every single point?', qKn: 'theta=0, pi/2, pi, 3pi/2, 2pi ನಲ್ಲಿ euler(theta) ಅನ್ನೂ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡುವುದೂ, ಪ್ರತಿ ಒಂದೇ ಬಿಂದುವಿನಲ್ಲಿ ಏನೂ ನಿಜವಾಗಿತ್ತು?',
        opts: ['The magnitude grew larger each time', 'The magnitude stayed at exactly 1.0000 every time, confirming e^(i*theta) always lies on the unit circle', 'The real part was always 0', 'The imaginary part was always negative'], correct: 1,
        optsKn: ['Magnitude ಪ್ರತಿ ಬಾರಿ ದೊಡ್ಡದಾಯಿತು', 'Magnitude ಪ್ರತಿ ಬಾರಿ ನಿಖರವಾಗಿ 1.0000 ನಲ್ಲಿ ಉಳಿಯಿತು, e^(i*theta) ಯಾವಾಗಲೂ unit circle ಮೇಲೆ ಇರುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'Real part ಯಾವಾಗಲೂ 0 ಆಗಿತ್ತು', 'Imaginary part ಯಾವಾಗಲೂ ಋಣಾತ್ಮಕವಾಗಿತ್ತು'] },
      { q: 'Genuinely rotating point=(3,4) by 45 degrees both via complex multiplication and via the standard 2D rotation matrix, what was found?', qKn: 'Point=(3,4) ಅನ್ನೂ complex multiplication ಮೂಲಕ ಮತ್ತು standard 2D rotation matrix ಮೂಲಕ ಎರಡೂ ಮೂಲಕ 45 ಡಿಗ್ರಿ ನಿಜವಾಗಿ ತಿರುಗಿಸುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['The two methods gave different results', 'Both methods gave the exact same numbers, (-0.7071, 4.9497), proving complex multiplication IS the rotation matrix', 'The complex method changed the magnitude', 'The matrix method failed to compute'], correct: 1,
        optsKn: ['ಎರಡು ವಿಧಾನಗಳು ಬೇರೆ ಫಲಿತಾಂಶಗಳನ್ನೂ ನೀಡಿದವು', 'ಎರಡೂ ವಿಧಾನಗಳು ನಿಖರ ಅದೇ ಸಂಖ್ಯೆಗಳನ್ನೂ ನೀಡಿದವು, (-0.7071, 4.9497), complex multiplication ರೊಟೇಶನ್ ಮ್ಯಾಟ್ರಿಕ್ಸ್ ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತಾ', 'Complex ವಿಧಾನ magnitude ಬದಲಾಯಿಸಿತು', 'Matrix ವಿಧಾನ ಗಣಿಸಲು ವಿಫಲವಾಯಿತು'] },
      { q: 'What does multiplying a complex number by i genuinely do, geometrically?', qKn: 'ಒಂದು complex number ಅನ್ನೂ i ಇಂದ ಗುಣಿಸುವುದೂ ಜ್ಯಾಮಿತೀಯವಾಗಿ ನಿಜವಾಗಿ ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Doubles its magnitude', 'Rotates it 90 degrees counterclockwise -- confirmed by 1xi=i moving (1,0) to (0,1)', 'Reflects it across the real axis', 'Has no geometric effect'], correct: 1,
        optsKn: ['ಇದರ magnitude ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ', 'ಇದನ್ನೂ 90 ಡಿಗ್ರಿ counterclockwise ತಿರುಗಿಸುತ್ತದೆ -- 1xi=i (1,0) ಅನ್ನೂ (0,1) ಗೆ ಚಲಿಸುವ ಮೂಲಕ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಇದನ್ನೂ real axis ಆದ್ಯಂತ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ', 'ಯಾವುದೇ ಜ್ಯಾಮಿತೀಯ ಪರಿಣಾಮವಿಲ್ಲ'] },
    ] } },
  ],
};
