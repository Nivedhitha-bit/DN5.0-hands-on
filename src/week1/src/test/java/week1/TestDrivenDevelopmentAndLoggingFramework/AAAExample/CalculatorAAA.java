package week1.TestDrivenDevelopmentAndLoggingFramework.AAAExample;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorAAA {

    private int a;
    private int b;

    // Setup (runs before every test)
    @BeforeEach
    void setUp() {
        System.out.println("Setting up test data");
        a = 10;
        b = 5;
    }

    // Teardown (runs after every test)
    @AfterEach
    void tearDown() {
        System.out.println("Cleaning up after test");
    }

    @Test
    void testAddition() {

        // ARRANGE (already done in setup)
        // ACT
        int result = a + b;

        // ASSERT
        assertEquals(15, result);
    }

    @Test
    void testSubtraction() {

        // ARRANGE
        // ACT
        int result = a - b;

        // ASSERT
        assertEquals(5, result);
    }

    @Test
    void testMultiplication() {

        // ARRANGE
        // ACT
        int result = a * b;

        // ASSERT
        assertEquals(50, result);
    }
}