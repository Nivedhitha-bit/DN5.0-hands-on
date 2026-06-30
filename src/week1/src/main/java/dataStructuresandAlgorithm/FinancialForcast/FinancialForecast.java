package week2.FinancialForcast;

public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double presentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return presentValue;
        }

        // Recursive case
        return futureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }
}