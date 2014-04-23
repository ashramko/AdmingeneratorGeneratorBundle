<?php

namespace Admingenerator\GeneratorBundle\Generator\Action\Generic;

use Admingenerator\GeneratorBundle\Builder\Admin\BaseBuilder;
use Admingenerator\GeneratorBundle\Generator\Action;

/**
 * This class describes generic Save and List action
 * @author Piotr Gołębiewski <loostro@gmail.com>
 */
class SaveAndListAction extends Action
{
    public function __construct($name, BaseBuilder $builder)
    {
        parent::__construct($name, 'generic');

        $this->setSubmit(true);
        $this->setIcon('i_save-and-list');
        $this->setLabel('action.generic.save-and-list');
    }
}
