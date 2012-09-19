Twitter-Bootstrap-Readonly-form
===============================

Twitter Bootstrap - 'Read only' form

This jQuery plugin takes a bootstrap formatted form and displays it in a 'read only' format. When the user presses the 'edit' button, the various options are displayed,

**Javascript**

Initialise the plugin like so:

```javascript
  //When document is ready
  $(function(){
      $('.readOnly').readOnly();
  });
```

The form *must* be formatted like so:

```html
    <form class="form-horizontal readOnly">
        <div class="control-group">
            <label class="control-label" for="inputName">
                Name
            </label>
            <div class="controls">
                <input type="text" id="inputName" placeholder="Name" value="Marty Mcfly">
            </div>
        </div>
        <div class="control-group">
            ...
        </div>
        ...
    </form>
```

Please see bootstrap's docs for more info.

**Note**: An 'edit' and 'save' button needs to be added within the form. The will be shown/hidden automatically. They need to be given the following classes:

```css
  .editReadOnly
  .readOnlySave
```

**Form elements**

The following form elements can be used:

```html
  <input type="text"/>
  <input type="email"/> <!-- Creates a mailto link -->
  <input type="checkbox"/>
  <input type="radio"/>
  <input type="password"/> <!-- This will display '******' -->
  <select></select>
  <textarea></textarea>
```

**Full example**

(Refer to 'index.html' to see a working example)

```html
  <form class="form-horizontal readOnly">
        <legend>
            Your account
            <button class="btn pull-right editReadOnly" type="button">
                Edit
            </button>
            <button class="btn btn-primary pull-right readOnlySave" type="button">
                Save
            </button>
        </legend>
        <div class="control-group">
            <label class="control-label" for="inputName">
                Name
            </label>
            <div class="controls">
                <input type="text" id="inputName" placeholder="Name" value="Marty Mcfly">
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputEmail">
                Email
            </label>
            <div class="controls">
                <input type="text" id="inputEmail" placeholder="Email" value="isThis1985@gmail.com">
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputPassword">
                Password
            </label>
            <div class="controls">
                <input type="password" id="inputPassword" placeholder="Password" value="timeTravel">
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputSex">
                Sex
            </label>
            <div class="controls">
                <select>
                    <option value="m" selected>
                        Male
                    </option>
                    <option value="f">
                        Female
                    </option>
                </select>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputEmails">
                Do you like time travel?
            </label>
            <div class="controls">
                <label class="radio">
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  Yes
                </label>
                <label class="radio">
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                  No
                </label>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputEmails">
                Receive emails?
            </label>
            <div class="controls">
                <input type="checkbox" id="inputEmails" checked>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputComments">
                Comments
            </label>
            <div class="controls">
                <textarea id="inputComments" placeholder="Comments" rows="3">Nobody calls me chicken!</textarea>
            </div>
        </div>
    </form>
```
