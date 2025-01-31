describe('Appium Test - Click Log in with Google', () => {
    it('should click on the Log in with Google button and pause', async () => {
        // Locate the "Log in with Google" button
        const loginButton = await $('//android.widget.TextView[@text="Log in with Google"]');

        // Wait for it to be visible
        await loginButton.waitForDisplayed({ timeout: 5000 });

        // Click the button
        await loginButton.click();

        console.log("✅ Clicked on 'Log in with Google'");

        // Pause for 5 seconds
        await browser.pause(5000);
    });
});
