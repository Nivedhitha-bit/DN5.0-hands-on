package week1.TestDrivenDevelopmentAndLoggingFramework.SettingUpJUnit;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    public void testAddition() {
        assertEquals(8, calculator.add(5, 3));
    }

    @Test
    public void testSubtraction() {
        assertEquals(2, calculator.subtract(5, 3));
    }

    @Test
    public void testMultiplication() {
        assertEquals(15, calculator.multiply(5, 3));
    }

    @Test
    public void testDivision() {
        assertEquals(2, calculator.divide(6, 3));
    }
}