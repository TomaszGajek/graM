<div id="Content">
    
    
    <div id="QuestionAdd">
        <div class="Single Text">
            <label for="QuestionAddLevel">Poziom Pytania:</label>
            <input id="QuestionAddLevel" type="text" name="Level" class="Text" />
        </div>
        <div class="Single Text">
            <label for="QuestionAddValue">Treść Pytania:</label>
            <input id="QuestionAddValue" type="text" name="Value" class="Text" />
        </div>
        <div class="Single Text">
            <label for="QuestionAddAnswers1">Odpowiedzi:</label>
            <input id="QuestionAddAnswers1" type="text" name="Answers" class="Text" />
        </div>
        
        <div class="Single Text">
            <label for="QuestionAddAnswers2">Odpowiedzi:</label>
            <input id="QuestionAddAnswers2" type="text" name="Answers" class="Text" />
        </div>
        
        <div class="Single Text">
            <label for="QuestionAddAnswers3">Odpowiedzi:</label>
            <input id="QuestionAddAnswers3" type="text" name="Answers" class="Text" />
        </div>
        
        <div class="Single Text">
            <label for="QuestionAddAnswers4">Odpowiedzi:</label>
            <input id="QuestionAddAnswers4" type="text" name="Answers" class="Text" />
        </div>
        <div class="Single Text">
            <label for="QuestionAddCorrect">Poprawna Odpowiedź:</label>
            <input id="QuestionAddCorrect" type="text" name="Correct" class="Text" />
        </div>
        <div class="Single Submit">
            <input type="submit" value="Dodaj" class="Button" />
        </div>
    </div>
    <div style="clear: both">
    <?php
        include_once 'game/questions.php';
    ?>
    </div>
    
    <div id="QuestionsList">
        <ul class="ItemList">
            <li class="Head">
                <div class="Cell Nr">Nr</div>
                <div class="Cell Level">Poziom</div>
                <div class="Cell Value">Treść</div>
                <div class="Cell Answers">Odpowiedzi</div>
                <div class="Cell Correct">Poprawna Odpowiedź</div>
                <div class="Cell Edit">Edycja</div>
            </li>
            <?php 
            if ($Questions) {
                $Nr = 1;
                foreach ($Questions as $id => $Question) {
                    ?>
                    <li class="Item Item-<?php echo $id; ?>">
                        <div class="Cell Nr"><?php echo $Nr; ?></div>
                        <div class="Cell Level">
                            <input name="Level" type="number" class="Text Level Disabled Short" value="<?php echo $Question['L']; ?>" disabled="disabled" />
                        </div>
                        <div class="Cell Value">
                            <input name="Value" type="text" class="Text Value Disabled" value="<?php echo $Question['Value']; ?>" disabled="disabled" />
                        </div>
                        <div class="Cell Answers">
                            <input name="Answers" type="text" class="Text Answers Disabled" value="<?php echo $Question['A1']; ?>" disabled="disabled" />
                        </div>
                        <div class="Cell Correct">
                            <input name="Correct" type="number" class="Text Correct Disabled Short" value="<?php echo $Question['C']; ?>" disabled="disabled" />
                        </div>
                        <div class="Cell Edit">
                            <a class="EditItem Button ShortBtn">E</a>
                            <a class="SaveItem Button ShortBtn">Z</a>
                            <a class="RemoveItem Button ShortBtn">X</a>
                        </div>
                    </li>
                    <?php
                    $Nr++;
                }
            }
            
            else {
            ?>
            <li class="Empty">Dodaj no jakieś pytsy</li>
            <?php
            }
            
            ?>

        </ul>
    </div>
    
</div>