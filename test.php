                        <div class="tabs">
                          <div class="tabs__caption">
                            <ul class="tabs__caption-inner">
                              <?if(!empty($arResult["DETAIL_TEXT"])):?>
                              <li>Описание</li>
                              <?endif;?>
                              <li>Характеристики</li>
                            </ul>
                          </div>
                          <div class="tabs__content">
                            <?if(!empty($arResult["DETAIL_TEXT"])):?>
                            <div class="tabs__content-block">
                              <div id="detailText">
                                <h2 class="heading"><?=GetMessage("CATALOG_ELEMENT_DETAIL_TEXT_HEADING")?></h2>
                                <div class="changeDescription"><?=$arResult["~DETAIL_TEXT"]?></div>
                              </div>
                            </div>
                            <?endif;?>
                            <div class="tabs__content-block">
                              <div class="changePropertiesGroup">
                                <?$APPLICATION->IncludeComponent(
                                    "dresscode:catalog.properties.list",
                                    "group",
                                    array(
                                      "DISABLE_PRINT_DIMENSIONS" => $arParams["DISABLE_PRINT_DIMENSIONS"],
                                      "DISABLE_PRINT_WEIGHT" => $arParams["DISABLE_PRINT_WEIGHT"],
                                      "CATALOG_VARIABLES" => $arParams["CATALOG_VARIABLES"],
                                      "SECTION_PATH_LIST" => $arResult["SECTION_PATH_LIST"],
                                      "LAST_SECTION" => $arResult["LAST_SECTION"],
                                      "PRODUCT_ID" => $arResult["ID"],
                        "COUNT_PROPERTIES"=>50
                                    ),
                                    false
                                  );?>
                              </div>
                            </div>
                          </div>
                        </div>
